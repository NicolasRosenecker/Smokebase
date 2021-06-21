import {Component, Input, OnInit} from '@angular/core';
import {Shisha} from "../shared/shisha";

@Component({
  selector: 'a.bs-shisha-list-item',
  templateUrl: './shisha-list-item.component.html',
  styleUrls: ['shisha-list-item.component.css']
})
export class ShishaListItemComponent implements OnInit {
  @Input() shisha!: Shisha;
  constructor() { }

  ngOnInit(): void {
  }

}
