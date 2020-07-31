import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    @Inject('APIURL') private api,
    private http: HttpClient
  ) { }

  getUser() {
    return this.http.get('https://randomuser.me/api/?results=100')
      .toPromise();
  }

  login(username, password) {
    return this.http.post(this.api + '/users/login', { username, password }).toPromise();
  }


}
