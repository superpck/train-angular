import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MainService } from './main.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    @Inject('APIURL') private api,
    private http: HttpClient,
    private mainService: MainService
  ) { }

  getUser() {
    return this.http.get('https://randomuser.me/api/?results=100')
      .toPromise();
  }

  login(username, password) {
    return this.http.post(this.api + '/users/login', { username, password }).toPromise();
  }

  async getUsers(column, value) {
    const headers: any = await this.mainService.getHttpHeader();
    return this.http.post(this.api + '/users', { column, value }, { headers })
      .toPromise();
  }

  async saveUsers(data) {
    const headers: any = await this.mainService.getHttpHeader();
    return this.http.post(this.api + '/users/save', { data }, { headers })
      .toPromise();
  }

  async deleteUsers(uid) {
    const headers: any = await this.mainService.getHttpHeader();
    return this.http.delete(this.api + '/users/delete/' + uid, { headers })
      .toPromise();
  }


}
