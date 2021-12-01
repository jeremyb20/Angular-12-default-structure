import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginResponse } from '../../components/login/login-response'
//import decode from 'jwt-decode';

@Injectable({
    providedIn: 'root'
})
export class AuthService { 
  theme: any; 

  constructor(private route: Router) {}
  public getToken(): any {
    return localStorage.getItem('token');
  }  

  authenticateUser(user: any) {
    localStorage.setItem('user_role',user.email);
    if(user.email === 'usuario@font-software.com'){
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
    const bodyElement = document.body;
    this.theme = localStorage.getItem('theme');
    if (bodyElement) {
      bodyElement.classList.remove(this.theme);
    }
    localStorage.clear();
    this.route.navigate(['/login']);
  }
}