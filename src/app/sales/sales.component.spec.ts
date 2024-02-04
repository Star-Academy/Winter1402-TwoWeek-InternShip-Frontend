import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesComponent } from './sales.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {MockComponent} from "ng-mocks";
import {SalesCardComponent} from "./sales-card/sales-card.component";

describe('SalesComponent', () => {
  let component: SalesComponent;
  let fixture: ComponentFixture<SalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesComponent, MockComponent(SalesCardComponent) ],
      imports: [FontAwesomeModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
