import {TestBed} from '@angular/core/testing';

import {NewsFunctionsService} from './news-handler.service';
import {NewsDataService} from "./news-data.service";
import createSpyObj = jasmine.createSpyObj;
import {DateConverter} from "../convert-date-to-second/convert-date-to-second.service";
import {NewsData} from "../../../../models/types";

fdescribe('NewsHandlerService', () => {
  let service: NewsFunctionsService;
  let MOCKED_NEWS_DATA: jasmine.SpyObj<NewsDataService>;
  let MOCKED_DATE_CONVERTER: jasmine.SpyObj<DateConverter>
  beforeEach(() => {
    MOCKED_NEWS_DATA = createSpyObj('NewsDataService', ['get_NEWS_DATA'])
    MOCKED_NEWS_DATA.get_NEWS_DATA.and.returnValue([
      {
        id: 2,
        title: "تعمیرات سایت",
        content: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
        updatedDate: new Date(2003,12),
        showMore: "#"
      },
      {
        id: 3,
        title: "تعمیرات سایت",
        content: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
        updatedDate:  new Date(2010,10),
        showMore: "#"
      },
      {
        id: 4,
        title: "تعمیرات سایت",
        content: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
        updatedDate:  new Date(2020,11),
        showMore: "#"
      },
    ])

    TestBed.configureTestingModule({
      providers: [
        {
          provide: DateConverter,
          useValue: MOCKED_DATE_CONVERTER
        },
        {
          provide: NewsDataService,
          useValue: MOCKED_NEWS_DATA
        }
      ]
    });
    service = TestBed.inject(NewsFunctionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('GetLatestNews SHOULD return sorted news WHEN its called', () => {
    // Arrange
    // Act
    // Assert
    const latestNews: NewsData[] = service.GetLatestNews()
    expect(latestNews[0].id).toBe(4)
    expect(latestNews[1].id).toBe(3)
    expect(latestNews[2].id).toBe(2)

  });
});
