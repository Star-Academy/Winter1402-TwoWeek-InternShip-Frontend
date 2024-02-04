import {Component, OnInit} from '@angular/core';
import {NewsData} from "../../models/types";
import {NewsFunctionsService} from "./services/news-services/news-handler.service";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  protected news: NewsData[] = [];
  protected selectedNews: NewsData[] = [];

  constructor(private dataProviderService: NewsFunctionsService) {
  }

  ngOnInit(): void {
    this.news = this.dataProviderService.GetLatestNews();
    this.selectedNews = this.news.slice(0, 2);
  }
}
