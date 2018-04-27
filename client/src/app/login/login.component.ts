import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
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
  @Output() onLogin = new EventEmitter();
  constructor(private httpSrv: HttpService) { }

  ngOnInit() {
    
  }
  public login(): void {
    this.httpSrv.login(this.username, this.password)
      .subscribe(
        x => {
          console.log(x);
          if(x) {
            this.onLogin.emit();
          } else {
            alert('invalid login');
          }
          
          //login token code here
        },
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
