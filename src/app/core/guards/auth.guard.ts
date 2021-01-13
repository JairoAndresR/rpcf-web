import { Injectable } from '@angular/core';
import { AuthService } from "./../services/auth/auth.service";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
      return this.authService.isAuthenticated().pipe(
        map((response:{token: string}) =>{
          if(response.token){
            return true;
          }
          this.router.navigate(['/accounts/login'])
          return false
        }), catchError((error)=>{
          this.router.navigate(['/accounts/login']);
          return of(false);
        }));
  }
}
