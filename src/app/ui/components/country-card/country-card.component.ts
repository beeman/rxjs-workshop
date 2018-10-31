import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-country-card',
  template: `
    <div class="media">
      <img class="avatar mr-3 rounded" [attr.src]="country.flag" [attr.alt]="country.name" width="50%">
      <div class="media-body">
        <h4>
          {{country.name}}
        </h4>
        <ul>
          <li>
            Native name: {{country.nativeName}}
          </li>
          <li>
            Capital: {{country.capital}}
          </li>
          <li>
            Population: {{country.population | number}}
          </li>
          <li>
            Borders: {{country.borders.join(', ')}}
          </li>
          <li>
            Alternative Spellings:
            <ul>
              <li *ngFor="let alt of country.altSpellings">{{alt}}</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  `,
})
export class CountryCardComponent {
  @Input() public country: any;
}
