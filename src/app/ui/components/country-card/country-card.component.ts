import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-country-card',
  templateUrl: './country-card.component.html',
})
export class CountryCardComponent {
  @Input() public country: any;
}
