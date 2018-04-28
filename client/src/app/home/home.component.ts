import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service'
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
  constructor(private http: HttpService) { }

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
      'search for significant events on  a  particular  date ',
    ]
  }

  public onSubmit(): void {
    console.log(this.selectedquery);
    let methodCall = `query${this.selectedquery}`;
    this.http[methodCall](this.userInput).subscribe(x => this.results = x);
  }



}
