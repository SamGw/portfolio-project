import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})

// Temporaire, à modifier quand on a un backend / veut se connecter au cri: 
// Tiré de : https://medium.com/techiediaries-com/angular-9-8-authentication-form-angular-formbuilder-formgroup-and-validators-example-with-node-f91729db006f
export class AuthService {
  constructor() { }

  public signIn(userData: User){
    localStorage.setItem('ACCESS_TOKEN', "access_token");
  }

  public isLoggedIn(){
    return localStorage.getItem('ACCESS_TOKEN') !== null;
  }

  public logout(){
    localStorage.removeItem('ACCESS_TOKEN');
  }
}
