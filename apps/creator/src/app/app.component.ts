import { DomSanitizer } from '@angular/platform-browser';
import { Kudos } from "./../../../../libs/api-interfaces/src/lib/api-interfaces";
import { HttpClient } from "@angular/common/http";
import { Message } from "@kudostories/api-interfaces";
import { Component } from "@angular/core";

@Component({
  selector: "kudostories-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.less"],
})
export class AppComponent {
  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {}

  saveKudos(video: Blob) {
    var kudos: Kudos = {
      de: "cesar",
      para: "Alguem",
      video: this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(video))
    };
    this.http.post("/api/kudos", kudos).subscribe(r => {
      console.log(r);
    });
  }
}
