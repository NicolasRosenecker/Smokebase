import {Component, Input, OnInit} from '@angular/core';
import {Tobacco} from "../shared/tobacco";

@Component({
  selector: 'a.bs-tobacco-list-item',
  templateUrl: './tobacco-list-item.component.html',
  styleUrls: ['tobacco-list-item.component.css']
})


export class TobaccoListItemComponent implements OnInit {
  @Input() tobacco!: Tobacco;
  constructor() { }

  ngOnInit(): void {
  }

}
