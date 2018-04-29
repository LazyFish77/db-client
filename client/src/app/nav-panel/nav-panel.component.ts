import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizationService } from '../authorization.service';
import {HttpService} from '../http.service'

@Component({
    selector: 'app-nav-panel',
    templateUrl: './nav-panel.component.html',
    styleUrls: ['./nav-panel.component.css']
})
export class NavPanelComponent implements OnInit {
    public userName: string;
    public priv: string;
    constructor(
        private router: Router,
        private authSrv: AuthorizationService,
        private http: HttpService
    ) {

     }

    ngOnInit() {
        this.priv = sessionStorage.getItem('privilege');
    }

    public onLogoutClick(): void {
        this.authSrv.logOut();
        this.router.navigateByUrl('/login');
    }

    public isAdmin(): boolean {
        return this.userName === 'admin'
    }

}
