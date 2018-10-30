import { Component, Input } from '@angular/core';

interface Link {
  label: string;
  url: string;
  children?: Link[];
}

@Component({
  selector: 'app-layout-sidebar',
  templateUrl: './layout-sidebar.component.html',
  styles: [`
    ul {
      display: none;
    }
    .active ul{
      display: block;
    }
  `]
})
export class LayoutSidebarComponent {
  @Input() public links: Link[];
}
