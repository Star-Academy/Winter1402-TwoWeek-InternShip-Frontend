import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SalesCardComponent} from './sales-card.component';
import {PersianNumberPipe} from "../../pipes/persian-number.pipe";
import {SalesData} from "../../../models/types";

describe('SalesCardComponent', () => {
  let component: SalesCardComponent;
  let fixture: ComponentFixture<SalesCardComponent>;
  const MOCKED_DATA: SalesData =
    {id: 1, title: "Call of duty", discount: 2, price: 12, imageSrc: "assets/images/COD.webp"}

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SalesCardComponent, PersianNumberPipe]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SalesCardComponent);
    component = fixture.componentInstance;
    component.shownData = MOCKED_DATA
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
