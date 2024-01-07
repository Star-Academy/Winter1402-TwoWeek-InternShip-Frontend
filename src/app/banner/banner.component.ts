import { Component, OnInit } from '@angular/core';
import {faCircleArrowLeft, faCircleArrowRight} from "@fortawesome/free-solid-svg-icons";

type aside_cards = {title: string, imageURL: string}

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  cards: aside_cards[] = [
    { title: "Battle Field", imageURL: "assets/images/btlfield.webp" },
    { title: "Assassins Creed III", imageURL: "assets/images/assassin.webp" },
    { title: "God of War", imageURL: "assets/images/god-of-war.webp" },
    { title: "Need for Speed", imageURL: "assets/images/need4speed.webp" },
  ]
  constructor() { }

  ngOnInit(): void {
  }

    protected readonly faArrowRight = faCircleArrowRight;
    protected readonly faArrowLeft = faCircleArrowLeft;
}
