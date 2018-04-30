import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { FormsModule, } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';
import { AuthorizationService } from '../authorization.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    public username: string;
    public password: string;
    public toggle: boolean;
    constructor(
        private httpSrv: HttpService,
        private authSrv: AuthorizationService,
        private router: Router
    ) { }

    ngOnInit() {
    }

    public login(): void {
        sessionStorage.setItem('username', this.username);                        
        this.httpSrv.getPrivilegeLevel(this.username)
        .subscribe(p => {
            if (p[0]) {
                sessionStorage.setItem('privilege', p[0].privilege_level);
            } else {
            sessionStorage.setItem('privilege', 'read');
            }
        });
        this.authSrv.logIn(this.username, this.password)
            .subscribe(
                ok => {
                    this.router.navigateByUrl('/home');
                        if (ok) {
                            this.httpSrv.userName = this.username;
                        }
                    },
                    err => {
                        alert('invalid login');
                    }
                );
    }

    public registeruser(): void {
        this.httpSrv.registerUser(this.username, this.password)
        .subscribe(
            x => console.log(x),
            e => console.log(e));
    }

    public clear(): void {
        this.username = null;
        this.password = null;
    }

}
