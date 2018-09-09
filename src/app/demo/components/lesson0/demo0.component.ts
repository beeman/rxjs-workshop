import { Component } from '@angular/core';

@Component({
  selector: 'app-demo0',
  templateUrl: './demo0.component.html',
})
export class Demo0Component {
  person = {
    name: 'Bram Borggreve',
    avatar: 'https://avatars3.githubusercontent.com/u/36491',
    facts: [
      '🐝 beeman',
      '🇳🇱 Born in the Netherlands',
      '🛫 Living abroad since 2015',
      '🤓 Freelance software engineer',
      '👨‍🏫 Instructor at @eggheadio',
      '👨‍💻 Author at @PacktPub',
    ]
  };
  personLeonardo = {
    name: 'Leonardo Perez',
    avatar: 'https://avatars3.githubusercontent.com/u/19419023',
    facts: [
      '👨‍💻 Frontend dev at YuxiGlobal',
      '👨‍💻 UI Enthousiast',
      '🕹 Passionate about Video Games',
      '🤓 Tech savvy',
    ]
  };
  personCarlos = {
    name: 'Carlos Lopez',
    avatar: 'https://pbs.twimg.com/profile_images/998226111292104708/t23KUw9h_400x400.jpg',
    facts: [
      '👨‍💻 Frontend dev at YuxiGlobal',
      '🤓 Co-creator Angular Medellín virtual meetups',
      '🚧 Loves to create new things',
    ]
  };

}
