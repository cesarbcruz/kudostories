import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'home-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.less'],
})
export class SobreComponent implements OnInit {
  @Input()
  creatorUrl:string = '#'
  @Input()
  viewerUrl:string = '#'
  
  constructor() {}

  ngOnInit(): void {}
}
