import { Injectable } from '@angular/core';
//import decode from 'jwt-decode';

@Injectable({
    providedIn: 'root'
})
export class AuthService {  
  public getToken(): any {
    return localStorage.getItem('token');
  }  

	public isAuthenticated(): any {    
      // get the token
      const token = this.getToken();    
      // return a boolean reflecting 
      // whether or not the token is expired
      //return tokenNotExpired(null, token);  
    }
}