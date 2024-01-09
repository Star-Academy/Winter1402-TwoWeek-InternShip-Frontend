import {Injectable} from '@angular/core';
import {SalesData} from "../../../models/types";

@Injectable({
  providedIn: 'root',
})
export class SalesProviderService {

  private readonly salesData: SalesData[] = [
    {id: 1, title: "Call of duty", discount: 2, price: 12, imageSrc: "assets/images/COD.webp"},
    {id: 2, title: "Call of duty", discount: 9, price: 12, imageSrc: "assets/images/COD.webp"},
    {id: 3, title: "Call of duty", discount: 12, price: 12, imageSrc: "assets/images/COD.webp"},
    {id: 4, title: "Call of duty", discount: 25, price: 12, imageSrc: "assets/images/COD.webp"},
    {id: 5, title: "Call of duty", discount: 10, price: 12, imageSrc: "assets/images/COD.webp"},
    {id: 6, title: "Call of duty", discount: 99, price: 12, imageSrc: "assets/images/COD.webp"},
    {id: 7, title: "Call of duty", discount: 32, price: 12, imageSrc: "assets/images/COD.webp"},
    {id: 8, title: "Call of duty", discount: 15, price: 12, imageSrc: "assets/images/COD.webp"},
    {id: 9, title: "Call of duty", discount: 12, price: 12, imageSrc: "assets/images/COD.webp"},
    {id: 10, title: "Call of duty", discount: 11, price: 12, imageSrc: "assets/images/COD.webp"},
  ];

  public getSalesData(): SalesData[] {
    return this.salesData;
  }
}
