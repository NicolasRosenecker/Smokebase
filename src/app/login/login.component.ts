import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthenticationService} from "../shared/authentication.service";
import {User} from "../shared/user";

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
  publicKey:string ="BNV0udXkCn6PawJqU4RxC1iQwlyNrvyYwLom1Wnaaqz5Brcq2QCqZSG9acpS_dlJCFbPlhwWuJWPOhpyMd37oXU";
  privateKey:string ="1pAPuVDm3oJXsU46mob_OM7biPGAJtgjRWp3anEa81M";

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
        this.authService.login(val.username, val.password).subscribe(res => {
          console.info("%c✔ Login succesful.", 'color: green;', res);
          // @ts-ignore
          this.authService.setLocalStorage(res.token, new User(
          // @ts-ignore
            this.authService.getIdFromToken(res["token"]),
            // @ts-ignore
            res["user_email"],
            // @ts-ignore
            res["user_nicename"],
            // @ts-ignore
            res["user_display_name"],
            ));
          });
      }
    }

    register(){
      const val = this.registerForm.value;
      if(val.registerUsername && val.registerPassword && val.registerEmail){
        this.authService.registerUser(val.registerUsername, val.registerPassword, val.registerEmail).subscribe(res => {
          console.info("%c✔ Registration succesful.", 'color: green;', res);

          this.authService.login(val.registerUsername, val.registerPassword).subscribe(res => {
            console.info("%c✔ Login succesful.", 'color: green;', res);
            // @ts-ignore
            this.authService.setLocalStorage(res.token, new User(
              // @ts-ignore
              this.authService.getIdFromToken(res["token"]),
              // @ts-ignore
              res["user_email"],
              // @ts-ignore
              res["user_nicename"],
              // @ts-ignore
              res["user_display_name"],
            ));
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
