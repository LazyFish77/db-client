import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';
@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
    public newPerson: any = {};
    constructor(public httpSrv: HttpService) { 
    }

    ngOnInit() {
    }

    public addPerson() {
        console.log(this.newPerson);
        this.httpSrv.addPerson(this.newPerson)
            .subscribe(x => console.log(x));
    }
    public invalidInputs() {
        let valid = true;
        if(!this.newPerson.firstName) {
            valid = false;
        } else if (!this.newPerson.firstName) {
            valid = false;
        } else if (!this.newPerson.middleName) {
            valid = false;
        } else if (!this.newPerson.lastName) {
            valid = false;
        } else if (!this.newPerson.gender) {
            valid = false;
        } else if (!this.newPerson.address) {
            valid = false;
        } else if (!this.newPerson.phone) {
            valid = false;
        } else if (!this.newPerson.notes) {
            valid = false;
        }
        return valid;
    }

}
