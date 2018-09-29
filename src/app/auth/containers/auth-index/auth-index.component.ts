import { Component } from '@angular/core'

@Component({
  selector: 'app-auth-index',
  template: `
    <div class="row">
      <div class="col-md-8 col-lg-6 mx-auto">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
})
export class AuthIndexComponent {}
