import { Component } from '@angular/core';
import {faCircleArrowLeft, faCircleArrowRight} from "@fortawesome/free-solid-svg-icons";
import { salesData } from "../../models/types";

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent {
  protected readonly faArrowRight = faCircleArrowRight;
  protected readonly faArrowLeft = faCircleArrowLeft;
  public salesData: salesData[] = [
    { id: 1, title: "Call of duty", discount: 4, price: 12, imageSrc: "assets/images/COD.webp" },
    { id: 2, title: "Call of duty", discount: 4, price: 12, imageSrc: "assets/images/COD.webp" },
    { id: 3, title: "Call of duty", discount: 4, price: 12, imageSrc: "assets/images/COD.webp" },
    { id: 4, title: "Call of duty", discount: 4, price: 12, imageSrc: "assets/images/COD.webp" },
  ];
  public salesTitle: string = "Holiday Sale"
}
