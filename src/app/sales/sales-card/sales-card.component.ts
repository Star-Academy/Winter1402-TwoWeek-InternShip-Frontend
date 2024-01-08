import {Component, Input, OnInit} from '@angular/core';
import { salesData } from "../../../models/types";

@Component({
  selector: 'app-sales-card',
  templateUrl: './sales-card.component.html',
  styleUrls: ['./sales-card.component.scss']
})
export class SalesCardComponent implements OnInit {
  @Input() public shownData!: salesData;
  public calculatedWithDiscount: number = 0;

  ngOnInit() {
    this.calculatedWithDiscount = this.shownData.price * ((100 - this.shownData.discount)/100)
  }

}
