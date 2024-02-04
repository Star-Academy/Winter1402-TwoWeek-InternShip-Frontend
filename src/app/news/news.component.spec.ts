import {ComponentFixture, TestBed} from '@angular/core/testing';
import {NewsComponent} from './news.component';
import {NewsDataService} from "./services/news-services/news-data.service";
import {NewsData} from "../../models/types";
import {MockComponent} from "ng-mocks";
import {NewsCardComponent} from "./news-card/news-card.component";
import {NewsFunctionsService} from "./services/news-services/news-handler.service";
import SpyObj = jasmine.SpyObj;


describe('NewsComponent', () => {
  let component: NewsComponent;
  let fixture: ComponentFixture<NewsComponent>;
  let MOCKED_DATA_SERVICE: SpyObj<NewsDataService>;
  let MOCKED_FUNCTION_SERVICE: SpyObj<NewsFunctionsService>
  const MOCKED_NEWS_DATA: NewsData[] = [
    {
      id: 1,
      title: "تعمیرات سایت",
      content: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
      updatedDate: new Date(12 / 10 / 2003),
      showMore: "#"
    },
    {
      id: 2,
      title: "تعمیرات سایت",
      content: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
      updatedDate: new Date(12 / 7 / 2003),
      showMore: "#"
    },
    {
      id: 3,
      title: "تعمیرات سایت",
      content: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
      updatedDate: new Date(2 / 3 / 2010),
      showMore: "#"
    },
  ];

  beforeEach(async () => {
    MOCKED_FUNCTION_SERVICE = jasmine.createSpyObj('NewsFunctionsService', ['GetLatestNews'])
    MOCKED_FUNCTION_SERVICE.GetLatestNews.and.returnValue(MOCKED_NEWS_DATA)

    await TestBed.configureTestingModule({
      declarations: [NewsComponent, MockComponent(NewsCardComponent)],
      providers: [{
        provide: NewsDataService,
        useValue: MOCKED_DATA_SERVICE
      },
        {
          provide: NewsFunctionsService,
          useValue: MOCKED_FUNCTION_SERVICE
        }

      ]
    }).compileComponents()

    fixture = TestBed.createComponent(NewsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('newsSectionComponent SHOULD have two child WHEN initializes', () => {
    // Arrange

    // Act
    fixture.detectChanges();

    // Assert
    const newsParent = fixture.nativeElement.querySelector("[testDataID=news-section]");
    const children: HTMLElement[] = newsParent.children;
    expect(children.length).toEqual(2);
  });
});

