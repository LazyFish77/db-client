import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizationService } from '../authorization.service';

@Component({
    selector: 'app-nav-panel',
    templateUrl: './nav-panel.component.html',
    styleUrls: ['./nav-panel.component.css']
})
export class NavPanelComponent implements OnInit {

    constructor(
        private router: Router,
        private authSrv: AuthorizationService
    ) { }

    ngOnInit() {
    }

    public onLogoutClick(): void {
        this.authSrv.logOut();
        this.router.navigateByUrl('/login');
    }

}
