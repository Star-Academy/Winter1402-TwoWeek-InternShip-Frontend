import {inject, Injectable, InjectionToken} from '@angular/core';
import {AsideCard} from "../../../models/types";


export const CARDS = new InjectionToken<AsideCard[]>(
  'cards',
  {
    providedIn: 'root',
    factory: () => [
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
    ]
  }
)

@Injectable({
  providedIn: 'root',
})
export class BannerDataProviderService {
  readonly cards: AsideCard[] = inject(CARDS)

  public GetBannerCards() {
    return this.cards;
  }
}
