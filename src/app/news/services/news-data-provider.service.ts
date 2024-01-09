import {Injectable} from '@angular/core';
import {NewsData} from "../../../models/types";

@Injectable({
  providedIn: 'root',
})
export class NewsDataProviderService {

  private readonly news: NewsData[] = [
    {
      id: 1,
      title: "Website Maintainace",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur provident sequi temporibus. Atque dolor est fuga labore laborum quisquam reiciendis repellat rerum sit sunt. Fuga iste iure nobis quasi sequi.",
      updatedDate: this.calculateDate(1000),
      showMore: "#"
    },
    {
      id: 2,
      title: "Website Maintainace",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur provident sequi temporibus. Atque dolor est fuga labore laborum quisquam reiciendis repellat rerum sit sunt. Fuga iste iure nobis quasi sequi.",
      updatedDate: this.calculateDate(50),
      showMore: "#"
    },
    {
      id: 3,
      title: "Website Maintainace",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur provident sequi temporibus. Atque dolor est fuga labore laborum quisquam reiciendis repellat rerum sit sunt. Fuga iste iure nobis quasi sequi.",
      updatedDate: this.calculateDate(200),
      showMore: "#"
    },
    {
      id: 4,
      title: "Website Maintainace",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur provident sequi temporibus. Atque dolor est fuga labore laborum quisquam reiciendis repellat rerum sit sunt. Fuga iste iure nobis quasi sequi.",
      updatedDate: this.calculateDate(5),
      showMore: "#"
    },
  ];

  public GetLatestNews() {
    this.news.sort((a, b) => b.updatedDate.getTime() - a.updatedDate.getTime());
    return this.news;
  }

  private calculateDate(sec: number): Date {
    return new Date(new Date().getTime() - 24 * 60 * 60 * sec);
  }
}
