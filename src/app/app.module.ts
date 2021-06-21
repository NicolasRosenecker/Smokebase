import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { TobaccoListComponent } from './tobacco-list/tobacco-list.component';
import { ShishaListComponent } from './shisha-list/shisha-list.component';
import { TobaccoListItemComponent } from './tobacco-list-item/tobacco-list-item.component';
import { ShishaListItemComponent } from './shisha-list-item/shisha-list-item.component';
import { ShishaDetailsComponent } from './shisha-details/shisha-details.component';
import { TobaccoDetailsComponent } from './tobacco-details/tobacco-details.component';
import {SmokebaseService} from "./shared/smokebase.service";
import { HttpClientModule } from "@angular/common/http";
import { LoginComponent } from './login/login.component';
import {ReactiveFormsModule} from "@angular/forms";
import {AuthenticationService} from "./shared/authentication.service";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    TobaccoListComponent,
    ShishaListComponent,
    TobaccoListItemComponent,
    ShishaListItemComponent,
    ShishaDetailsComponent,
    TobaccoDetailsComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,

  ],
  providers: [SmokebaseService, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
