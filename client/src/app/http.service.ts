import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class HttpService {

  constructor(private http: HttpClient) { }

  public login(username, password): Observable<any> {
      let formData = new FormData()
      formData.append('username', username);
      formData.append('password', password);
      formData.append('loginUser', 'true');
      return this.http.post('http://webdev.cs.uwosh.edu/students/fischt77/login.php', formData);
  } 
  public registerUser(username, password): Observable<any> {
    let formData = new FormData()
    formData.append('username', username);
    formData.append('password', password);
    formData.append('registerUser', 'true');
    return this.http.post('http://webdev.cs.uwosh.edu/students/fischt77/login.php', formData);
  }


}
