import { KudoStoriesVideoService } from "./../../../../libs/shared/local-data-access/src/lib/kudostories-video/kudostories-video.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { DomSanitizer } from "@angular/platform-browser";
import { Kudos } from "./../../../../libs/api-interfaces/src/lib/api-interfaces";
import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { OnlineOfflineService } from "libs/shared/local-data-access/src/lib/service/online-offline.service";

@Component({
  selector: "kudostories-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.less"],
})
export class AppComponent {
  form!: FormGroup;

  constructor(
    private http: HttpClient,
    private sanitizer: DomSanitizer,
    private _snackBar: MatSnackBar,
    private fb: FormBuilder,
    private localDB: KudoStoriesVideoService,
    private onlineOffline: OnlineOfflineService
  ) {}

  saveKudos(video: Blob) {
    const de = this.form.get("de")?.value;
    const para = this.form.get("para")?.value;
    this.uploadVideo(de, para, video);
  }

  afterSaveSuccess() {
    this.showMessageSucess();
    this.form.reset();
  }

  showMessageSucess() {
    this._snackBar.open("Seu vídeo foi enviado com sucesso", "fechar", {
      duration: 1,
      verticalPosition: "top",
      horizontalPosition: "start",
    });
  }

  uploadVideo(de: string, para: string, video: Blob) {
    let formData = new FormData();
    formData.append("file", video);
    return this.http.post<any>("/api/upload", formData).subscribe({
      next: (r) => {
        const kudos: Kudos = {
          de,
          para,
          url: `/api/video/${r[0]}`,
        };
        return this.http
          .post<any>("/api/kudos", kudos)
          .subscribe(() => this.afterSaveSuccess());
      },
      error: () => this.saveLocal(de, para, video),
    });
  }

  saveLocal(de: string, para: string, video: Blob) {
    this.localDB.saveKudos(de, para, video).then(() => this.afterSaveSuccess());
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      de: [null, [Validators.required]],
      para: [null, [Validators.required]],
    });

    this.onlineOffline.connectionChanged.subscribe((online) => {
      if (online) {
        this.syncKudostories();
      }
    });

    if (this.onlineOffline.isOnline) {
      this.syncKudostories();
    }
  }

  syncKudostories() {
    this.localDB.getKudosAll().then((kudos) => {
      kudos.forEach((k) => {
        let formData = new FormData();
        formData.append("file", k.video);
        this.http.post<any>("/api/upload", formData).subscribe({
          next: (r) => {
            const kudos: Kudos = {
              de: k.de,
              para: k.para,
              url: `/api/video/${r[0]}`,
            };
            return this.http
              .post<any>("/api/kudos", kudos)
              .subscribe(() => this.localDB.removeKudos(k.id));
          },
        });
      });
    });
  }
}
