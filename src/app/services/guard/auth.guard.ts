import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {
  constructor(private _router: Router, private _authenticationService: AuthService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const currentUser = this._authenticationService.currentUserValue;

      if (currentUser) {
        // check if route is restricted by role
        // if (route.data.roles && route.data.roles.indexOf(currentUser.role) === -1) {
        //   // role not authorised so redirect to not-authorized page
        //   this._router.navigate(['/pages/miscellaneous/not-authorized']);
        //   return false;
        // }
  
        // authorised so return true
        return true;
      }
  
      // not logged in so redirect to login page with the return url
      this._router.navigate(['/login']);
      return false;
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const currentUser = this._authenticationService.currentUserValue;

      if (currentUser) {
        return true;
      }
      // not logged in so redirect to login page with the return url
      this._router.navigate(['/login']);
      return false;
  }
}
