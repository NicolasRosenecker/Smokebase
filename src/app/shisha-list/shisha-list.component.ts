import { Component, OnInit } from '@angular/core';
import {SmokebaseService} from "../shared/smokebase.service";
import {Shisha} from "../shared/shisha";
import * as $ from 'jquery';

@Component({
  selector: 'bs-shisha-list',
  templateUrl: './shisha-list.component.html',
  styleUrls: ['shisha-list.component.css']
})
export class ShishaListComponent implements OnInit {

  shishas!: Shisha[];
  filteredSmall: boolean = false;
  filteredMedium: boolean = false;
  filteredLarge: boolean = false;

  constructor(private app:SmokebaseService) { }

  ngOnInit() {
    this.filteredSmall = false;
    this.filteredMedium = false;
    this.filteredLarge = false;
    $("#load_more_shishas").show();
    let shishasPerPage = 10;

    const renderPosts = () =>{
      this.app.getAllShishas(shishasPerPage).subscribe(res => this.shishas = res);
    }

    renderPosts();

    let button = document.getElementById("load_more_shishas");

    button!.addEventListener("click", function(){
      shishasPerPage += 10;
      renderPosts();

    });
  }

  filterSmall(){
    $("#load_more_shishas").hide();
    this.app.getAllSmallShishas().subscribe(res => this.shishas = res);
    this.filteredSmall = true;
    this.filteredMedium = false;
    this.filteredLarge = false;
  }

  filterMedium(){
    $("#load_more_shishas").hide();
    this.app.getAllMediumShishas().subscribe(res => this.shishas = res);
    this.filteredSmall = false;
    this.filteredMedium = true;
    this.filteredLarge = false;
  }

  filterLarge(){
    $("#load_more_shishas").hide();
    this.app.getAllLargeShishas().subscribe(res => this.shishas = res);
    this.filteredSmall = false;
    this.filteredMedium = false;
    this.filteredLarge = true;
  }

}
