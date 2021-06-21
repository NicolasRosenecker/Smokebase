import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthenticationService} from "../shared/authentication.service";

interface Response{
  access_token: string;
}

@Component({
  selector: 'bs-login',
  templateUrl: './login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    public authService: AuthenticationService,
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ["", ],
      password: ["", ]
    });

  }

    login(){
      const val = this.loginForm.value;
      if(val.username && val.password){
        this.authService.login(val.username, val.password).subscribe(
          res => {
            // @ts-ignore
            this.authService.setLocalStorage(res);
          });
      }
    }

    isLoggedIn(){
      return this.authService.isLoggedIn();
    }

    logout(){
      return this.authService.logout();
    }
}
