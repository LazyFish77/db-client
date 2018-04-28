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
  constructor(private http: HttpService) { }

  public ngOnInit(): void {
    this.queries = [
      'search by family members who share the same last name',
      'search for parents of a family member, identified by a key',
      'search children of a family member, identified by a key',
      'search for siblings of a family member, identified by a key ',
      `display  both  sets  of  grandparents of  a
        family  member, identified by a key `,
      `search for grandchildren (and  their  total  number)
        of  a  family  member, identified by a key `,
      `display the current spouse, if any, of a family member
        identified by a key `,
      'display all the significant events, who is identified by a key',
      `display  all  family  members  who  have  some  keyword, in their notes field`,
      'play  all  the  significant  events  that  happened  on  a  particular  date ',
    ]
  }

  public showInput (selection): void {
    this.selectedquery = selection;
  }

  public onSubmit(): void {
    
  }


}
