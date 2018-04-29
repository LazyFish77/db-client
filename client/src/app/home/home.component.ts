import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    public queries: Array<string>;
    public selectedquery: number;
    public userInput: string;
    public results: any;
    public newPerson: any = {};
    public deletePerson: any = {};
    public priv: string;

    constructor(
        private http: HttpService
    ) { }

    public ngOnInit(): void {
        this.queries = [
            'search by family members who share the same last name',
            'search for parents, identified by a key',
            'search for childern, identified by a key',
            'search for siblings, identified by a key ',
            `search for grandparents, identified by a key `,
            `search for grandchildren, identified by a key `,
            `search for current spouse, identified by a key `,
            'search for significant events, who is identified by a key',
            `search for family members who  have  some  keyword, in their notes field`,
            'search for significant events on  a  particular  date '
        ];
        this.priv = sessionStorage.getItem('privilege');
    }

    public onSubmit(): void {
        console.log(this.selectedquery);
        const methodCall = `query${this.selectedquery}`;
        this.http[methodCall](this.userInput).subscribe(x =>{
            this.results = x
            console.log(this.results);
        } );
    }
    public addPerson(): void {
        this.http.addPerson(this.newPerson)
            .subscribe(x => console.log(x));
    }
    public dPerson(): void {
        console.log(this.deletePerson);
        this.http.deletePerson(this.deletePerson)
            .subscribe(x => {
                console.log(x);
            });

    }
    public invalidInputs(): boolean {
        let valid = true;
        if (!this.newPerson.firstName) {
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
