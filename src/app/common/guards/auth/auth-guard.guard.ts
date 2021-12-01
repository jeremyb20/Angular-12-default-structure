import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree,NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';

import { AuthService } from 'src/app/services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router, private location: Location){
    
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
   // return ( this.authService.getUserRole() != 'admin' )? true:false;

      if( this.authService.getUserRole() != 'usuario@font-software.com' ){
        return true;
      }else {
        //this.router.navigate(['/admin']);
        this.location.back();
        return false;
      }
  }
  
}
