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
  registerForm!: FormGroup;

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

    this.registerForm = this.fb.group({
      registerUsername: ["", ],
      registerEmail: ["", ],
      registerPassword: ["", ]
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

    register(){
      const val = this.registerForm.value;
      if(val.registerUsername && val.registerPassword && val.registerEmail){
        this.authService.registerUser(val.registerUsername, val.registerPassword, val.registerEmail).subscribe(response => {
          console.info("%c✔ Registration succesful.", 'color: green;', response);
          this.authService.login(val.registerUsername, val.registerPassword).subscribe(
            res => {
              // @ts-ignore
              this.authService.setLocalStorage(res);
            });
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
