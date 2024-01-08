import { Component } from '@angular/core';
import {faCircleArrowLeft, faCircleArrowRight} from "@fortawesome/free-solid-svg-icons";
import { SalesData } from "../../models/types";

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent  {
  protected readonly faArrowRight = faCircleArrowRight;
  protected readonly faArrowLeft = faCircleArrowLeft;
  private salesData: SalesData[] = [
    { id: 1, title: "Call of duty", discount: 2, price: 12, imageSrc: "assets/images/COD.webp" },
    { id: 2, title: "Call of duty", discount: 9, price: 12, imageSrc: "assets/images/COD.webp" },
    { id: 3, title: "Call of duty", discount: 12, price: 12, imageSrc: "assets/images/COD.webp" },
    { id: 4, title: "Call of duty", discount: 25, price: 12, imageSrc: "assets/images/COD.webp" },
    { id: 5, title: "Call of duty", discount: 10, price: 12, imageSrc: "assets/images/COD.webp" },
    { id: 6, title: "Call of duty", discount: 99, price: 12, imageSrc: "assets/images/COD.webp" },
    { id: 7, title: "Call of duty", discount: 32, price: 12, imageSrc: "assets/images/COD.webp" },
    { id: 8, title: "Call of duty", discount: 15, price: 12, imageSrc: "assets/images/COD.webp" },
    { id: 9, title: "Call of duty", discount: 12, price: 12, imageSrc: "assets/images/COD.webp" },
    { id: 10, title: "Call of duty", discount: 11, price: 12, imageSrc: "assets/images/COD.webp" },
  ];
  private readonly maximumShowSize: number = 4;
  public showSalesData: SalesData[];
  public salesTitle: string = "Holiday Sale";
  public shownSaleID: number;

  constructor() {
    this.shownSaleID = 0;
    this.showSalesData = [...this.salesData].slice(0, this.maximumShowSize)
  }
  private changeSalesDataArray() : void {
    const startIndex = this.shownSaleID;
    const endIndex = startIndex + this.maximumShowSize;
    if (endIndex <= this.salesData.length) {
      this.showSalesData = this.salesData.slice(startIndex, endIndex);
    } else {
      this.showSalesData = this.salesData.slice(0, this.maximumShowSize);
      this.shownSaleID = 0;
    }
  }

  public moveFunction(movement: "left" | "right") :void {
    if (movement === "left") {
      this.shownSaleID += 1;
    }
    else if (movement === "right") {
      if (this.shownSaleID > 0) {
        this.shownSaleID -= 1;
      }
      else
        return;
    }
    this.changeSalesDataArray();
  }

}
