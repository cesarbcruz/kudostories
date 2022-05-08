import { MatSnackBar } from "@angular/material/snack-bar";
import { DomSanitizer } from "@angular/platform-browser";
import { Kudos } from "./../../../../libs/api-interfaces/src/lib/api-interfaces";
import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

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
    private fb: FormBuilder
  ) {
  }

  saveKudos(video: Blob) {
    this.uploadVideo(video).subscribe((r) => {
      const kudos: Kudos = {
        de: this.form.get('de')?.value,
        para: this.form.get('para')?.value,
        url: `/api/video/${r[0]}`,
      };
      return this.http.post<any>("/api/kudos", kudos).subscribe((r) => {
        this.showMessageSucess();  
        this.form.reset();      
      });
    });
  }

  showMessageSucess(){
    this._snackBar.open('Seu vídeo foi enviado com sucesso', 'fechar', {
      duration: 1,
      verticalPosition: 'top',
      horizontalPosition: 'start',
    });
  }

  uploadVideo(video: Blob) {
    let formData = new FormData();
    formData.append("file", video);
    return this.http.post<any>("/api/upload", formData);
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      de: [null, [Validators.required]],
      para: [null, [Validators.required]]
    });
  }
}
