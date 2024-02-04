import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { SalesComponent } from './sales/sales.component';
import { FooterComponent } from './footer/footer.component';
import { NewsComponent } from './news/news.component';
import { SalesCardComponent } from './sales/sales-card/sales-card.component';
import {NgOptimizedImage} from "@angular/common";
import { NewsCardComponent } from './news/news-card/news-card.component';
import { AsideCardsComponent } from './banner/aside-cards/aside-cards.component';
import { PersianNumberPipe } from './pipes/persian-number.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    SalesComponent,
    FooterComponent,
    NewsComponent,
    SalesCardComponent,
    NewsCardComponent,
    AsideCardsComponent,
    PersianNumberPipe
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
