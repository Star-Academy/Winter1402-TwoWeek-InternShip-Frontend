import { Component, OnInit } from '@angular/core';
import {faCircleArrowLeft, faCircleArrowRight} from "@fortawesome/free-solid-svg-icons";
import { asideCards } from "../../models/types";

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  protected readonly faArrowRight = faCircleArrowRight;
  protected readonly faArrowLeft = faCircleArrowLeft;
  public cards: asideCards[] = [
    { id: 1, title: "Battle Field", asideImageURL: "assets/images/btlfield.webp" },
    { id: 2, title: "Assassins Creed III", asideImageURL: "assets/images/assassin.webp" },
    { id: 3, title: "God of War", asideImageURL: "assets/images/god-of-war.webp" },
    { id: 4, title: "Need for Speed", asideImageURL: "assets/images/need4speed.webp" },
  ]
}
