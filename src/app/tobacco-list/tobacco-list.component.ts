import { Component, OnInit } from '@angular/core';
import { SmokebaseService } from "../shared/smokebase.service";
import { Tobacco } from "../shared/tobacco";
import * as $ from 'jquery';


@Component({
  selector: 'bs-tobacco-list',
  templateUrl: './tobacco-list.component.html',
  styleUrls: ['tobacco-list.component.css']
})


export class TobaccoListComponent implements OnInit {

  tobaccos!: Tobacco[];

  constructor(private app:SmokebaseService) { }

  ngOnInit() {
    let tobaccosPerPage = 10;

    const renderPosts = () =>{
      this.app.getAllTobaccos(tobaccosPerPage).subscribe(res => this.tobaccos = res);
    }

    renderPosts();

    let button = document.getElementById("load_more_tobaccos");
    button!.addEventListener("click", function(){
      tobaccosPerPage += 10;
      renderPosts();
    });
  }

  sortByBrand(){

  }

}
