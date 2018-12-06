import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { ILogin } from "../models/interfaces/auth";
import { AngularFireAuth } from "@angular/fire/auth";
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private authFire: AngularFireAuth, private router: Router) {

   }

  loginWithEmail(auth: ILogin){
    return this.authFire.auth.signInWithEmailAndPassword(auth.email, auth.password);
  }
}
