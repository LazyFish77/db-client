import { Component, OnInit } from '@angular/core';
import { FormsModule, } from '@angular/forms';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public username: string;
  public password: string;
  constructor(private httpSrv: HttpService) { }

  ngOnInit() {
    
  }
  public login(): void {
    this.httpSrv.login(this.username, this.password)
      .subscribe(
        x => console.log(x),
        e => console.log(e));
  }
  public registeruser(): void {
    this.httpSrv.registerUser(this.username, this.password)
      .subscribe(
        x => console.log(x),
        e => console.log(e));
  }

  public clear() : void {
    this.username = null;
    this.password = null;
  }

}
