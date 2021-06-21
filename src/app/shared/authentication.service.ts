import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import jwt_decode from "jwt-decode";
import {User} from "./user";


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
    return this.http.post(`https://api.s1810456030.student.kwmhgb.at/wp-json/wp/v2/users/register?username=`
      + username +
      '&password=' + password +
      '&email=' + email, {});
  }

  setLocalStorage(token: string, user: User) {
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
  }

  getIdFromToken(token: string): number {
    // @ts-ignore
    return +(jwt_decode(token) as Token)["data"]["user"]["id"];
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
    let user = JSON.parse(<string>localStorage.getItem("user"));
    return user.user_display_name;
  }

}

