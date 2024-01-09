import { Component, OnInit } from '@angular/core';
import {faCircleArrowLeft, faCircleArrowRight} from "@fortawesome/free-solid-svg-icons";
import { AsideCard } from "../../models/types";

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  protected readonly faArrowRight = faCircleArrowRight;
  protected readonly faArrowLeft = faCircleArrowLeft;
  private activeBannerID: number;
  public cards: AsideCard[] = [
    { id: 1, title: "Battle Field", asideImageURL: "assets/images/btlfield.webp", bannerImage: "assets/images/battle-walp.webp" },
    { id: 2, title: "Assassins Creed III", asideImageURL: "assets/images/assassin.webp", bannerImage: "assets/images/assasin-wallp.webp" },
    { id: 3, title: "God of War", asideImageURL: "assets/images/god-of-war.webp", bannerImage: "assets/images/godofwar-wallp.webp" },
    { id: 4, title: "Need for Speed", asideImageURL: "assets/images/need4speed.webp", bannerImage: "assets/images/need4speed-wallp.webp" },
  ]
  public activeBanner: AsideCard;

  constructor() {
    this.activeBannerID = 0;
    this.activeBanner = this.cards[this.activeBannerID];
  }
  public asideClicked(clickedItemID: number) : void {
    this.activeBannerID = clickedItemID - 1;
    this.activeBanner = this.cards[this.activeBannerID]
  }

  moveNext() {
    this.activeBannerID = (this.activeBannerID + 1) % this.cards.length;
    this.afterMove();
  }

  movePrevious() {
    this.activeBannerID = (this.activeBannerID + this.cards.length - 1) % this.cards.length;
    this.afterMove();
  }

  afterMove() {
    this.activeBanner = this.cards[this.activeBannerID]
  }
}
