import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class HttpService {

  constructor(private http: HttpClient) { }

  public login(username, password): Observable<any> {
      let formData = new FormData();
      formData.append('username', username);
      formData.append('password', password);
      formData.append('loginUser', 'true');
      return this.http.post('http://webdev.cs.uwosh.edu/students/fischt77/login.php', formData);
  }
  public registerUser(username, password): Observable<any> {
    let formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);
    formData.append('registerUser', 'true');
    return this.http.post('http://webdev.cs.uwosh.edu/students/fischt77/login.php', formData);
  }
  public query1(lastName): Observable<any> {
    let formData = new FormData(); 
    formData.append('getSameLastName', lastName);
    return this.http.post('http://webdev.cs.uwosh.edu/students/fischt77/queries.php', formData);
  }

  public query2(key): Observable<any> {
    let formData = new FormData();
    formData.append('getParents', key);
    return this.http.post('http://webdev.cs.uwosh.edu/students/fischt77/queries.php', formData);
  }

  public query3(key): Observable<any> {
    let formData = new FormData();
    formData.append('getChildern', key);
    return this.http.post('http://webdev.cs.uwosh.edu/students/fischt77/queries.php', formData);
  }

  public query4(key): Observable<any> {
    let formData = new FormData();
    formData.append('getSiblings', key);
    return this.http.post('http://webdev.cs.uwosh.edu/students/fischt77/queries.php', formData);
  }

  public query5(key): Observable<any> {
    let formData = new FormData();
    formData.append('getBothSetsOfGrandParents', key);
    return this.http.post('http://webdev.cs.uwosh.edu/students/fischt77/queries.php', formData);
  }

  public query6(key): Observable<any> {
    let formData = new FormData();
    formData.append('getAllGrandKids', key);
    return this.http.post('http://webdev.cs.uwosh.edu/students/fischt77/queries.php', formData);
  }

  public query7(key): Observable<any> {
    let formData = new FormData();
    formData.append('getSpouse', key);
    return this.http.post('http://webdev.cs.uwosh.edu/students/fischt77/queries.php', formData);
  }

  public query8(key): Observable<any> {
    let formData = new FormData();
    formData.append('getAllEvents', key);
    return this.http.post('http://webdev.cs.uwosh.edu/students/fischt77/queries.php', formData);
  }

  public query9(keyword): Observable<any> {
    let formData = new FormData();
    formData.append('getFamilyMembersWithKeyword', keyword);
    return this.http.post('http://webdev.cs.uwosh.edu/students/fischt77/queries.php', formData);
  }

  public query10(date): Observable<any> {
    let formData = new FormData();
    formData.append('getEventsOnDate', date);
    return this.http.post('http://webdev.cs.uwosh.edu/students/fischt77/queries.php', formData);
  }

}
