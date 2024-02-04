import {ComponentFixture, TestBed} from '@angular/core/testing';

import {NewsCardComponent} from './news-card.component';
import {NewsData} from "../../../models/types";

describe('NewsCardComponent', () => {
  const MOCKED_DATA: NewsData = {
    id: 2,
    title: "MOCKED_TITLE",
    content: "MOCKED_CONTENT",
    updatedDate: new Date(12 / 7 / 2003),
    showMore: "#SHOW_MORE"
  }
  let component: NewsCardComponent;
  let fixture: ComponentFixture<NewsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewsCardComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(NewsCardComponent);
    component = fixture.componentInstance;
    component.data = MOCKED_DATA;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('[Template] NewsCardComponent SHOULD have title WHEN initializes', () => {
    // Arrange
    // Act
    // Assert
    const title: HTMLElement = fixture.nativeElement.querySelector("[data-test-id=news-card-title]")
    expect(title.innerText).toBe(MOCKED_DATA.title)

  });

  it('[Template] NewsCardComponent SHOULD have paragraph WHEN initializes', () => {
    // Arrange
    // Act
    // Assert
    const paragraph: HTMLElement = fixture.nativeElement.querySelector("[data-test-id=news-card-paragraph]")
    expect(paragraph.innerText).toBe(MOCKED_DATA.content)
  });

  it('[Template] NewsCardComponent SHOULD have show more href WHEN initializes', () => {
    // Arrange
    // Act
    // Assert
    const showMore: HTMLAnchorElement = fixture.nativeElement.querySelector("[data-test-id=news-card-more]")
    expect(showMore.href).toContain(MOCKED_DATA.showMore)
  });
});
