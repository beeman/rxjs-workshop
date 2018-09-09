import { Component, Input } from '@angular/core';

interface Person {
  name: string;
  avatar: string;
  facts?: string[];
}

@Component({
  selector: 'app-person-card',
  templateUrl: './person-card.component.html',
})
export class PersonCardComponent {
  @Input() public person: Person;
}
