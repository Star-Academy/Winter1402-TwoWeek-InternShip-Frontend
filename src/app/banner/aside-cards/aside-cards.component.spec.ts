import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AsideCardsComponent } from './aside-cards.component';
import {AsideCard} from "../../../models/types";
import {By} from "@angular/platform-browser";

fdescribe('AsideCardsComponent', () => {
  const MOCKED_DATA: AsideCard = {
    bannerImage: "FAKED_IMAGE",
    title: "FAKED_TITLE",
    asideImageURL: "FAKED_ASIDE_URL",
    id: 952
  }

  let component: AsideCardsComponent;
  let fixture: ComponentFixture<AsideCardsComponent>;
  let host: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsideCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsideCardsComponent);
    host = fixture.nativeElement;
    component = fixture.componentInstance;
    component.data = MOCKED_DATA;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('[Template] title SHOULD have exact data WHEN initialize', () => {
    // Arrange
    const elem: HTMLElement = fixture.debugElement.query(By.css("[dataTestID=\"aside-title\"]")).nativeElement

    // Assert
    expect(elem.innerText).toBe(MOCKED_DATA.title)
  });

  it('[Template] image SHOULD have exact image path WHEN initialize', () => {
    // Arrange
    const elem: HTMLImageElement = fixture.debugElement.query(By.css("[dataTestID=\"aside-image\"]")).nativeElement
    // Assert
    expect(elem.src).toContain(MOCKED_DATA.asideImageURL)
  });
});
