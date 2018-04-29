import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';
@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
    public updatePrivilege: any = {};
   
    constructor(public httpSrv: HttpService) { 
    }

    ngOnInit() {

    }

    
    public setPrivilegeLevel(): void {
        this.httpSrv.setPrivilegeLevel(this.updatePrivilege)
            .subscribe(x => {

            });
    }

}
