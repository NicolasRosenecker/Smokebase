import { Component, OnInit } from '@angular/core';
import {SmokebaseService} from "../shared/smokebase.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Tobacco} from "../shared/tobacco";
import {TobaccoFactory} from "../shared/tobacco-factory";

@Component({
  selector: 'bs-tobacco-details',
  templateUrl: './tobacco-details.component.html',
  styleUrls: ['tobacco-details.component.css']
})
export class TobaccoDetailsComponent implements OnInit {
  tobacco: Tobacco = TobaccoFactory.empty();


  constructor(
    private app: SmokebaseService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    const params = this.route.snapshot.params;
    this.app.getSingleTobacco(params['id']).subscribe(t => this.tobacco = t);
  }

}
