import {Injectable} from '@angular/core';
import {SalesData} from "../../../models/types";

@Injectable({
  providedIn: 'root',
})
export class SalesProviderService {

  private readonly salesData: SalesData[] = [
    {id: 1, title: "Call of duty", discount: 2, price: 12, imageSrc: "assets/images/COD.webp"},
    {id: 2, title: "Rainbow Six Seige", discount: 9, price: 12, imageSrc: "assets/images/sales/rainbow6.webp"},
    {id: 3, title: "Sekiro: Shadows Die Twice", discount: 12, price: 12, imageSrc: "assets/images/sales/sekiro.webp"},
    {id: 4, title: "CS:GO", discount: 25, price: 12, imageSrc: "assets/images/sales/csgo.webp"},
    {id: 5, title: "Counter Strike 2", discount: 10, price: 12, imageSrc: "assets/images/sales/cs2.webp"},
    {id: 6, title: "Call of duty: MW", discount: 99, price: 12, imageSrc: "assets/images/sales/cod.webp"},
    {id: 7, title: "Battle Field", discount: 32, price: 12, imageSrc: "assets/images/sales/battle.webp"}
  ];

  public getSalesData(): SalesData[] {
    return this.salesData;
  }
}
