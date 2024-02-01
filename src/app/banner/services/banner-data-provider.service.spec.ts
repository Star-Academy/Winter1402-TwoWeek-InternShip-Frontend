import {TestBed} from "@angular/core/testing";
import {CARDS, BannerDataProviderService} from "./banner-data-provider.service";
import {AsideCard} from "../../../models/types";


fdescribe("Get all aside cards test", () => {
  let instance: BannerDataProviderService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: CARDS,
          useValue: [  {
            id: 1,
            title: "Battle Field",
            asideImageURL: "assets/images/btlfield.webp",
            bannerImage: "assets/images/battle-walp.webp"
          },]
        }
      ]
    })
    instance = TestBed.inject(BannerDataProviderService)
  })
  it("get all cards", () => {
    const result: AsideCard[] = instance.GetBannerCards()
    expect(result.length).toBeGreaterThan(0)
  })
})
