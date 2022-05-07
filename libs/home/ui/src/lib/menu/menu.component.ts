import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'home-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less'],
})
export class MenuComponent implements OnInit {
  @Input()
  logo: string = "https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
  
  constructor() {}

  ngOnInit(): void {}
}
