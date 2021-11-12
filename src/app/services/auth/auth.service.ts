import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginResponse } from '../../components/login/login-response'
//import decode from 'jwt-decode';

@Injectable({
    providedIn: 'root'
})
export class AuthService {  

  constructor(private route: Router) {}
  public getToken(): any {
    return localStorage.getItem('token');
  }  

  authenticateUser(user: any) {
    localStorage.setItem(user.username,'user_role');
    if(user.username == 'admin'){
      this.route.navigate(['/admin'])
    }else{
      this.route.navigate(['/dashboard'])
    }

  }

  getUserRole() {
    return localStorage.getItem('user_role');
  }

	public isAuthenticated(): any {    
      // get the token
      const token = this.getToken();    
      // return a boolean reflecting 
      // whether or not the token is expired
      //return tokenNotExpired(null, token);  
  }

  logout() {
    localStorage.clear()
    this.route.navigate(['/login']);
  }
}