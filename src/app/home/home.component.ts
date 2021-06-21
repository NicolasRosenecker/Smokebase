import {Component, NgModule, OnInit} from '@angular/core';
import * as $ from "jquery";


@Component({
  selector: 'bs-home',
  templateUrl: './home.component.html',
  styleUrls: ['home.component.css']
})

export class HomeComponent implements OnInit {
  height = $(window).height();
  width = $(window).width();
  constructor() { }



  ngOnInit(): void {

  }

}
