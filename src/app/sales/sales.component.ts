import { Component, OnInit } from '@angular/core';
import {faCircleArrowLeft, faCircleArrowRight} from "@fortawesome/free-solid-svg-icons";

type SalesData = { title: string, discount: number, price: number, imageSrc: string };

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {
  sales_data: SalesData[] = [
    { title: "Call of duty", discount: 4, price: 12, imageSrc: "assets/images/COD.webp" },
    { title: "Call of duty", discount: 4, price: 12, imageSrc: "assets/images/COD.webp" },
    { title: "Call of duty", discount: 4, price: 12, imageSrc: "assets/images/COD.webp" },
    { title: "Call of duty", discount: 4, price: 12, imageSrc: "assets/images/COD.webp" },
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

    protected readonly faArrowRight = faCircleArrowRight;
    protected readonly faArrowLeft = faCircleArrowLeft;
}
