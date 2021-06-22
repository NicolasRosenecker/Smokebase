import {Component, NgModule, OnInit} from '@angular/core';
import * as $ from "jquery";


@Component({
  selector: 'bs-home',
  templateUrl: './home.component.html',
  styleUrls: ['home.component.css']
})

export class HomeComponent implements OnInit {




  constructor() { }



  ngOnInit(): void {
    // @ts-ignore
    console.log($("#tets").width());

  }

}
