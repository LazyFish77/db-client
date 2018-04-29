import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';
@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
    public updatePrivilege: any = {};
    public Levels: Array<string> = [
        "admin",
        "write",
        "read"
    ]
    constructor(public httpSrv: HttpService) { 
    }

    ngOnInit() {

    }

    
    public setPrivilegeLevel(): void {
        this.httpSrv.setPrivilegeLevel(this.updatePrivilege)
            .subscribe(x => {
                alert('updated');
            });
    }

}
