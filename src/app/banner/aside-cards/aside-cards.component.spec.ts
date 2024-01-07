import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideCardsComponent } from './aside-cards.component';

describe('AsideCardsComponent', () => {
  let component: AsideCardsComponent;
  let fixture: ComponentFixture<AsideCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsideCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsideCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
