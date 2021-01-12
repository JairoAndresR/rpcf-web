import { Injectable } from '@angular/core';
import { AuthService } from "./../services/auth/auth.service";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      let isAuthenticated = this.authService.isAuthenticated()
      if (isAuthenticated){
        return true
      }else{
        this.router.navigate(['/accounts/login'])
        return false
      }
  }
  
}
