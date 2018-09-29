import { Component, OnInit } from '@angular/core'
import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'app-auth-logout',
  template: `
    <h1>{{ loggedOut ? 'Logged out' : 'Logging out'  }}</h1>
    
    <div class="card">
      <div class="card-body">
        <a routerLink="/login">Click here</a> to log in again.
      </div>
    </div>
  `,
  styles: [],
})
export class AuthLogoutComponent implements OnInit {
  public loggedOut = false
  constructor(private auth: AuthService) {}

  ngOnInit() {
    this.auth.logout().subscribe(() => (this.loggedOut = !this.loggedOut))
  }
}
