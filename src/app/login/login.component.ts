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
      function greetingNotification(){
        const notificationTitle = "Grüß dich!";
        const notificationBody = "Danke für's Registrieren bei Smokebase! 😎";
        const notifImg = "https://img.stickers.cloud/packs/c14e9903-e67f-4ada-885a-432e3467ee89/webp/538c114f-a52e-4df7-90a7-c35617b23708.webp";
        const options = {
          body: notificationBody,
          icon: notifImg
        }

        new Notification(notificationTitle, options);
        setTimeout(greetingNotification, 1000);
      }

      Notification.requestPermission().then((result) => {

        if(result == 'granted')
          greetingNotification();
      });
    }

    isLoggedIn(){
      return this.authService.isLoggedIn();
    }

    logout(){
      return this.authService.logout();
    }

}
