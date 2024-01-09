import {Component} from '@angular/core';
import {SalesData} from "../../models/types";
import {faCircleArrowLeft, faCircleArrowRight} from "@fortawesome/free-solid-svg-icons";
import {SalesProviderService} from "./services/sales-provider.service";

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent {
  protected readonly faArrowRight = faCircleArrowRight;
  protected readonly faArrowLeft = faCircleArrowLeft;
  private readonly maximumShowSize: number = 4;
  public showSalesData: SalesData[];
  public salesTitle: string = "فروش‌های ویژه";
  private queue: number[] = [];

  constructor(private salesProviderService: SalesProviderService) {
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
    const salesData = this.salesProviderService.getSalesData();
    this.showSalesData = this.queue.map(index => salesData[index]);
  }

  private enqueue(index: number): void {
    this.queue.push(index);
    if (this.queue.length > this.maximumShowSize) {
      this.queue.shift();
    }
  }

  public moveNext(): void {
    const salesData = this.salesProviderService.getSalesData();
    const nextIndex = (this.queue[this.queue.length - 1] + 1) % salesData.length;
    this.enqueue(nextIndex);
    this.updateShowSalesData();
  }

  public movePrevious(): void {
    const salesData = this.salesProviderService.getSalesData();
    const prevIndex = (this.queue[0] - 1 + salesData.length) % salesData.length;
    this.queue.unshift(prevIndex);
    if (this.queue.length > this.maximumShowSize) {
      this.queue.pop();
    }
    this.updateShowSalesData();
  }
}
