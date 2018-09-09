import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
})
export class LayoutComponent implements OnInit {
  public logo = 'assets/logo.png';
  public title = 'RxJS: like a boss';
  public items = [ { label: 'Demos', url: '/demos'} ];

  constructor() { }

  ngOnInit() {
  }

}
