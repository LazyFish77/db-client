import { Component } from '@angular/core';
import { AuthorizationService } from './authorization.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    get loggedIn(): boolean {
        return this.authSrv.loggedIn;
    }

    private login = false;

    constructor(
        private authSrv: AuthorizationService
    ) {
    }

}
