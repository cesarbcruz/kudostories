import { DomSanitizer } from "@angular/platform-browser";
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
    let formData = new FormData();
    formData.append('file', video);
    return this.http.post<any>("/api/upload", formData).subscribe((r) => {
      console.log(r);
    });
  }
}
