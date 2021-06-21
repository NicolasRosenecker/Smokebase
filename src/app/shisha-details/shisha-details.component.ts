import { Component, OnInit } from '@angular/core';
import { Shisha } from "../shared/shisha";
import { ShishaFactory } from "../shared/shisha-factory";
import {SmokebaseService} from "../shared/smokebase.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'bs-shisha-details',
  templateUrl: './shisha-details.component.html',
  styles: [
  ]
})
export class ShishaDetailsComponent implements OnInit {

  shisha: Shisha = ShishaFactory.empty();


  constructor(
    private app: SmokebaseService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    const params = this.route.snapshot.params;
    this.app.getSingleShisha(params['id']).subscribe(s => this.shisha = s);
  }

}
