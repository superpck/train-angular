import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MainService } from './main.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  public jwtHelper: JwtHelperService = new JwtHelperService();
  tokenName = 'myAppToken';

  constructor(
    private mainService: MainService,
    private route: Router
  ) {
    this.tokenName = this.mainService.tokenName;
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const token = sessionStorage.getItem(this.tokenName) || localStorage.getItem(this.tokenName);
    if (token) {
      if (this.jwtHelper.isTokenExpired(token)){
        this.route.navigate(['/login']);
        return false;
      } else {
        return true;
      }
    } else {
      this.route.navigate(['/login']);
      return false;
    }

  }

}
