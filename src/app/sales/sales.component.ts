import {Component} from '@angular/core';
import {faCircleArrowLeft, faCircleArrowRight} from "@fortawesome/free-solid-svg-icons";
import {SalesData} from "../../models/types";

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent {
  protected readonly faArrowRight = faCircleArrowRight;
  protected readonly faArrowLeft = faCircleArrowLeft;
  private readonly salesData: SalesData[] = [
    {id: 1, title: "Call of duty", discount: 2, price: 12, imageSrc: "assets/images/COD.webp"},
    {id: 2, title: "Call of duty", discount: 9, price: 12, imageSrc: "assets/images/sales/rainbow6.jpg"},
    {id: 3, title: "Call of duty", discount: 12, price: 12, imageSrc: "assets/images/sales/sekiro.webp"},
    {id: 4, title: "Call of duty", discount: 25, price: 12, imageSrc: "assets/images/sales/csgo.png"},
    {id: 5, title: "Call of duty", discount: 10, price: 12, imageSrc: "assets/images/sales/cs2.webp"},
    {id: 6, title: "Call of duty", discount: 99, price: 12, imageSrc: "assets/images/sales/cod.jpg"},
    {id: 7, title: "Call of duty", discount: 32, price: 12, imageSrc: "assets/images/sales/battle.jpg"}
  ];
  private readonly maximumShowSize: number = 4;
  public showSalesData: SalesData[];
  public salesTitle: string = "فروش‌های ویژه";
  private queue: number[] = [];

  constructor() {
    this.showSalesData = [];
    this.initializeQueue();
    this.updateShowSalesData();
  }

  private initializeQueue(): void {
    for (let i = 0; i < this.maximumShowSize; i++) {
      this.queue.push(i);
    }
  }

  private updateShowSalesData(): void {
    this.showSalesData = this.queue.map(index => this.salesData[index]);
  }

  private enqueue(index: number): void {
    this.queue.push(index);
    if (this.queue.length > this.maximumShowSize) {
      this.queue.shift();
    }
  }

  public moveNext(): void {
    const nextIndex = (this.queue[this.queue.length - 1] + 1) % this.salesData.length;
    this.enqueue(nextIndex);
    this.updateShowSalesData();
  }

  public movePrevious(): void {
    const prevIndex = (this.queue[0] - 1 + this.salesData.length) % this.salesData.length;
    this.queue.unshift(prevIndex);
    if (this.queue.length > this.maximumShowSize) {
      this.queue.pop();
    }
    this.updateShowSalesData();
  }
}
