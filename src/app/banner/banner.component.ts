import {Component, OnInit} from '@angular/core';
import {faCircleArrowLeft, faCircleArrowRight} from "@fortawesome/free-solid-svg-icons";
import {AsideCard} from "../../models/types";
import {BannerDataProviderService} from "./services/banner-data-provider.service";

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  protected readonly faArrowRight = faCircleArrowRight;
  protected readonly faArrowLeft = faCircleArrowLeft;
  private activeBannerID: number = 0;
  public cards: AsideCard[] = [];
  public activeBanner: AsideCard = {bannerImage: "", title: "", asideImageURL: "", id: 0};



  constructor(private bannerDataProviderService: BannerDataProviderService) {
    this.activeBannerID = 0;
    this.cards = this.bannerDataProviderService.GetBannerCards();
    this.activeBanner = this.cards[this.activeBannerID];
  }

  public asideClicked(clickedItemID: number): void {
    this.activeBannerID = clickedItemID - 1;
    this.activeBanner = this.cards[this.activeBannerID]
  }

  public moveNext() {
    this.shiftActiveBanner(1);
  }

  public movePrevious() {
    this.shiftActiveBanner(-1);
  }

  private shiftActiveBanner(shift: number) {
    this.activeBannerID = (this.activeBannerID + this.cards.length + shift) % this.cards.length;
    this.activeBanner = this.cards[this.activeBannerID]
  }
}
