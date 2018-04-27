import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public queries: Array<string>;
  constructor() { }

  ngOnInit() {
    this.queries = [
      'display the full names of family members who share the same last name',
      'display the parents of a family member, who is identified by a key',
      'display the children of a family member, who is identified by a key',
      'display the siblings of a family member, who is identified by a key ',
      `display  both  sets  of  grandparents  (if  available)  of  a
        family  member,  who  is  identified by a key `,
      `display  all  the  grandchildren (and  their  total  number)
        of  a  family  member,  who is identified by a key `,
      `display the current spouse, if any, of a family member
         who is identified by a key `,
      'display all the significant events, who is identified by a key',
      `display  all  family  members  who  have  some  keyword,
        fully  or  partially  specified, in their notes field`,
      'play  all  the  significant  events  that  happened  on  a  particular  date ',
    ]
  }

}
