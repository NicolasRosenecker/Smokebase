import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import jwt_decode from "jwt-decode";


interface Token {
  exp: number;
  user: {
    id: string;
  };
}

@Injectable()
export class AuthenticationService {
  private api: string = "https://api.s1810456030.student.kwmhgb.at/wp-json/jwt-auth/v1/token";

  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    return this.http.post(`${this.api}`, {},
     {
      params: {
        username: email,
        password: password
      }
    });
  }

  registerUser(username: string, password: string, email: string){
    return this.http.post(`https://api.s1810456030.student.kwmhgb.at/wp-json/wp/v2/users/register?
      username=` + username +
      '&password=' + password +
      '&email=' + email, {});
  }

  public setLocalStorage(token: string) {
    console.info("%c✔ Logged in, storing token", 'color: green;');
    // @ts-ignore
    let userToken = token["token"];

    // @ts-ignore
    let userName = token["user_display_name"];

    // @ts-ignore
    const decodedToken = jwt_decode(userToken) as Token;

    // @ts-ignore
    let userId = decodedToken["data"]["user"]["id"];

    localStorage.setItem("token", userToken);
    localStorage.setItem("userId", userId);
    localStorage.setItem("userName", userName);
  }

  logout() {
    this.http.post(`${this.api}`, {});
    localStorage.clear();
    console.log("%c⚠ Logged out, cleared Storage.", 'color: yellow;');
  }

  public isLoggedIn(){
    if (localStorage.getItem('token')) {
      const token: string = localStorage.getItem('token') || '{}';
      const decodedToken = jwt_decode(token) as Token;
      const expirationDate: Date = new Date(0);
      expirationDate.setUTCSeconds(decodedToken.exp);

      if (expirationDate < new Date()) {
        console.log("%c⚠ Token seems to be expired..", 'color: red;');
        localStorage.removeItem('token');
        return false;
      }
      return true;
    } else {
      return false;
    }
  }

  public getUsername(){
    return localStorage.getItem("userName");
  }

}

