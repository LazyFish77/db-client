import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthorizationService {

    // TODO: make some sort of actual 'token'
    get loggedIn(): boolean {
        return localStorage.getItem('token') !== null;
    }

    constructor(
        private httpSrv: HttpService
    ) {
    }

    public logIn(username: string, password: string): Observable<any> {

        return new Observable(observer => {
            this.httpSrv.login(username, password)
            .subscribe(
              x => {
                if (x === true) {
                    localStorage.setItem('token', 'true');
                    observer.next(x);
                } else {
                    observer.error(x);
                }

                observer.complete();
                // login token code here
              },
              e => {
                  observer.error(e);
                  observer.complete();
              }
            );
        });

    }

    public logOut(): void {
        localStorage.removeItem('token');
    }

}
