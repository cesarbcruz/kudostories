import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { Kudos } from './../../../../libs/api-interfaces/src/lib/api-interfaces';
import { Component } from '@angular/core';

@Component({
  selector: 'kudostories-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  title = 'viewer';
  kudoList:Kudos[] = []
  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {
    
  }

  ngOnInit(): void {
    this.http.get<Kudos[]>('/api/kudos').subscribe(r=>{
      this.kudoList = r
    });
  }
}
