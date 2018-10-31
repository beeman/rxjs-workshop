import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
})
export class LayoutComponent implements OnInit {
  public logo = 'assets/logo.png';
  public title = 'RxJS: from trainee to boss';
  public items = [
    // { label: 'Lessons', url: '/lessons'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
