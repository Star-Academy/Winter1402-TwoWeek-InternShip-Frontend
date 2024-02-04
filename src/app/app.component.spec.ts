import {TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {MockComponents} from "ng-mocks";
import {HeaderComponent} from "./header/header.component";
import {BannerComponent} from "./banner/banner.component";
import {SalesComponent} from "./sales/sales.component";
import {FooterComponent} from "./footer/footer.component";
import {NewsComponent} from "./news/news.component";
import {SalesCardComponent} from "./sales/sales-card/sales-card.component";
import {NewsCardComponent} from "./news/news-card/news-card.component";
import {AsideCardsComponent} from "./banner/aside-cards/aside-cards.component";
import {PersianNumberPipe} from "./pipes/persian-number.pipe";
import {BrowserModule} from "@angular/platform-browser";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {NgOptimizedImage} from "@angular/common";

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ...MockComponents(
          HeaderComponent,
          BannerComponent,
          SalesComponent,
          FooterComponent,
          NewsComponent,
          SalesCardComponent,
          NewsCardComponent,
          AsideCardsComponent,
        )
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Internship-Winter-Mohaymen'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Internship-Winter-Mohaymen');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const children = compiled.children
    expect(children.length).toBeGreaterThan(0);
  });
});
