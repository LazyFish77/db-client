import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthorizationService } from './authorization.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(
      private authSrv: AuthorizationService,
      private router: Router
  ) { }

  canActivate() {
      const loggedin = this.authSrv.loggedIn === true;
      if (!loggedin) {
        this.router.navigateByUrl('/login');
      }
    return loggedin;
  }
}
