import {Injectable} from "@angular/core";
import {NewsDataService} from "./news-data.service";
import {NewsData} from "../../../../models/types";

@Injectable({
  providedIn: "root"
})
export class NewsFunctionsService {
  private sorted_news: NewsData[] = [];
  constructor(private readonly newsDataService: NewsDataService) {
  }
  public GetLatestNews() {
    this.sorted_news = this.newsDataService.get_NEWS_DATA().sort((a, b) => b.updatedDate.getTime() - a.updatedDate.getTime());
    return this.sorted_news;
  }
}
