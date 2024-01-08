import { Component, OnInit } from '@angular/core';
import { NewsData } from "../../models/types";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  public news: NewsData[] = [
    {id: 1 ,title: "Website Maintainace", content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur provident sequi temporibus. Atque dolor est fuga labore laborum quisquam reiciendis repellat rerum sit sunt. Fuga iste iure nobis quasi sequi.", updatedDate: new Date((new Date()).getTime() - 24*60*60*1000), showMore: "#"},
    {id: 2 ,title: "Website Maintainace", content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur provident sequi temporibus. Atque dolor est fuga labore laborum quisquam reiciendis repellat rerum sit sunt. Fuga iste iure nobis quasi sequi.", updatedDate: new Date((new Date()).getTime() - 24*60*60*50), showMore: "#"},
    {id: 3 ,title: "Website Maintainace", content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur provident sequi temporibus. Atque dolor est fuga labore laborum quisquam reiciendis repellat rerum sit sunt. Fuga iste iure nobis quasi sequi.", updatedDate: new Date((new Date()).getTime() - 24*60*60*200), showMore: "#"},
    {id: 4 ,title: "Website Maintainace", content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur provident sequi temporibus. Atque dolor est fuga labore laborum quisquam reiciendis repellat rerum sit sunt. Fuga iste iure nobis quasi sequi.", updatedDate: new Date((new Date()).getTime() - 24*60*60*5), showMore: "#"},
  ]
  public selectedNews: NewsData[] = [];

  ngOnInit(): void {
    this.news.sort((a, b) => b.updatedDate.getTime() - a.updatedDate.getTime());
    this.selectedNews = this.news.slice(0, 2);
  }

}
