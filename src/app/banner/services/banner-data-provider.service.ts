import {Injectable} from '@angular/core';
import {AsideCard} from "../../../models/types";

@Injectable({
  providedIn: 'root',
})
export class BannerDataProviderService {

  private readonly cards: AsideCard[] = [
    {
      id: 1,
      title: "Battle Field",
      asideImageURL: "assets/images/btlfield.webp",
      bannerImage: "assets/images/battle-walp.webp"
    },
    {
      id: 2,
      title: "Assassins Creed III",
      asideImageURL: "assets/images/assassin.webp",
      bannerImage: "assets/images/assasin-wallp.webp"
    },
    {
      id: 3,
      title: "God of War",
      asideImageURL: "assets/images/god-of-war.webp",
      bannerImage: "assets/images/godofwar-wallp.webp"
    },
    {
      id: 4,
      title: "Need for Speed",
      asideImageURL: "assets/images/need4speed.webp",
      bannerImage: "assets/images/need4speed-wallp.webp"
    },
  ];

  public GetBannerCards() {
    return this.cards;
  }
}
