import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import {TobaccoListComponent} from "./tobacco-list/tobacco-list.component";
import {ShishaListComponent} from "./shisha-list/shisha-list.component";
import {TobaccoDetailsComponent} from "./tobacco-details/tobacco-details.component";
import {ShishaDetailsComponent} from "./shisha-details/shisha-details.component";
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'tobaccos', component: TobaccoListComponent },
  { path: 'tobaccos/:id', component: TobaccoDetailsComponent },
  { path: 'shishas', component: ShishaListComponent },
  { path: 'shishas/:id', component: ShishaDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
