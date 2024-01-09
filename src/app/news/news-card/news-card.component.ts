import { Component, Input } from '@angular/core';
import { NewsData } from "../../../models/types";

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss']
})
export class NewsCardComponent {
  @Input() public data!: NewsData;
}
