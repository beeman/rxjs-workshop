import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

interface Link {
  label: string;
  url: string;
}

@Component({
  selector: 'app-layout-sidebar',
  templateUrl: './layout-sidebar.component.html',
})
export class LayoutSidebarComponent implements OnInit {
  @Input() public links: Link[];

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.data
      .pipe(map(data => data['links']))
      .subscribe(res => this.links = res);
  }

}
