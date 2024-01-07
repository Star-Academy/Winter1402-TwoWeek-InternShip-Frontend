import { Component, OnInit } from '@angular/core';

type newsData = { title: string, content: string, updated_date: Date, show_more: string };

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  news: newsData[] = [
    {title: "Website Maintainace", content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur provident sequi temporibus. Atque dolor est fuga labore laborum quisquam reiciendis repellat rerum sit sunt. Fuga iste iure nobis quasi sequi.", updated_date: new Date((new Date()).getTime() - 24*60*60*1000), show_more: "#"},
    {title: "Website Maintainace", content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur provident sequi temporibus. Atque dolor est fuga labore laborum quisquam reiciendis repellat rerum sit sunt. Fuga iste iure nobis quasi sequi.", updated_date: new Date((new Date()).getTime() - 24*60*60*50), show_more: "#"},
    {title: "Website Maintainace", content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur provident sequi temporibus. Atque dolor est fuga labore laborum quisquam reiciendis repellat rerum sit sunt. Fuga iste iure nobis quasi sequi.", updated_date: new Date((new Date()).getTime() - 24*60*60*200), show_more: "#"},
    {title: "Website Maintainace", content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur provident sequi temporibus. Atque dolor est fuga labore laborum quisquam reiciendis repellat rerum sit sunt. Fuga iste iure nobis quasi sequi.", updated_date: new Date((new Date()).getTime() - 24*60*60*5), show_more: "#"},
  ]
  selected_news: newsData[] = [];
  constructor() { }

  ngOnInit(): void {
    this.news.sort((a, b) => b.updated_date.getTime() - a.updated_date.getTime());
    this.selected_news = this.news.slice(0, 2);
  }

}
