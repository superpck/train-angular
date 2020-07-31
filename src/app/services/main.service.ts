import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  tokenName = 'myAppToken';
  jwtHelper: JwtHelperService = new JwtHelperService();

  constructor(
    private route: Router
  ) { }

  async getToken(tokenName=this.tokenName) {
    return sessionStorage.getItem(tokenName) || localStorage.getItem(tokenName);
  }

  async checkToken() {
    const token: any = await this.getToken();
    if (!token || this.jwtHelper.isTokenExpired(token)) {
      this.route.navigate(['/login']);
    } else {
      return this.jwtHelper.decodeToken(token);
    }
  }



}
