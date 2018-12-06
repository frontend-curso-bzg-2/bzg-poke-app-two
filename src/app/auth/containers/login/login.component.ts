import { Component, OnInit } from '@angular/core';
import { ILogin } from '../../models/interfaces/auth';
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  auth(event: ILogin) {
    if(event){
      this.authService.loginWithEmail(event)
      .then(
        user => {
          console.log(user);
        }
      );
    }
  }

}
