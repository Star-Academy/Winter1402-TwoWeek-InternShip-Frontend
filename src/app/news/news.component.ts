import {Component, OnInit} from '@angular/core';
import {NewsData} from "../../models/types";
import {NewsDataProviderService} from "./services/news-data-provider.service";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  public news: NewsData[] = [];
  public selectedNews: NewsData[] = [];

  constructor(private dataProviderService: NewsDataProviderService) {
  }

  ngOnInit(): void {
    this.news = this.dataProviderService.GetLatestNews();
    this.selectedNews = this.news.slice(0, 2);
  }
}
