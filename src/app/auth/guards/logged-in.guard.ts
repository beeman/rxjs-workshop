import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

import { AuthService } from '../services/auth.service';
import { map, take, tap } from 'rxjs/operators';

@Injectable()
export class LoggedInGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const redirectUrl = state.url || '/profile';

    return this.auth.authState$
      .pipe(
        take(1),
        map(authState => !!authState),
        tap(authenticated => {
          if (!authenticated) {
            return this.login(redirectUrl);
          }
        }),
      );
  }

  login(redirectUrl) {
    return this.router.navigate([`/login`], {
      queryParams: {
        url: redirectUrl,
      },
    });
  }
}
