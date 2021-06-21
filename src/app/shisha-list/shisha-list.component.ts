import { Component, OnInit } from '@angular/core';
import {SmokebaseService} from "../shared/smokebase.service";
import {Shisha} from "../shared/shisha";

@Component({
  selector: 'bs-shisha-list',
  templateUrl: './shisha-list.component.html',
  styleUrls: ['shisha-list.component.css']
})
export class ShishaListComponent implements OnInit {

  shishas!: Shisha[];

  constructor(private app:SmokebaseService) { }

  ngOnInit() {
    let shishasPerPage = 10;

    const renderPosts = () =>{
      this.app.getAllShishas(shishasPerPage).subscribe(res => this.shishas = res);
      console.log(shishasPerPage);
    }

    renderPosts();

    let button = document.getElementById("load_more_shishas");
    button!.addEventListener("click", function(){
      shishasPerPage += 10;
      renderPosts();

    });
  }

}
