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
  filteredMenthol: boolean = false;
  filteredWithoutMenthol: boolean = false;

  constructor(private app:SmokebaseService) { }

  ngOnInit() {
    this.filteredMenthol = false;
    this.filteredWithoutMenthol = false;
    $("#load_more_tobaccos").show();
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

  filterMenthol(){
    this.app.getAllTobaccosWithMenthol().subscribe(res => this.tobaccos = res);
    $("#load_more_tobaccos").hide();
    this.filteredMenthol = true;
    this.filteredWithoutMenthol = false;
  }

  filterWithoutMenthol(){
    $("#load_more_tobaccos").hide();
    this.app.getAllTobaccosWithoutMenthol().subscribe(res => this.tobaccos = res);
    this.filteredWithoutMenthol = true;
    this.filteredMenthol = false;
  }

}
