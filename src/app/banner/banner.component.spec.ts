import {ComponentFixture, TestBed} from '@angular/core/testing';
import {BannerDataProviderService} from "./services/banner-data-provider.service";
import {BannerComponent} from './banner.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {Component, Input} from "@angular/core";

@Component({
  template: '',
  selector: 'app-aside-cards'
})
class MockAsideCards {
  @Input()
  public data: any;
}

describe('BannerComponent', () => {
  let component: BannerComponent;
  let fixture: ComponentFixture<BannerComponent>;
  let BannerDataServiceMocked: jasmine.SpyObj<BannerDataProviderService>;
  let host: HTMLElement;


  const Mocked_data = [{
    id: 1,
    title: "Battle Field",
    asideImageURL: "assets/images/btlfield.webp",
    bannerImage: "assets/images/battle-walp.webp"
  },
    {
      id: 2,
      title: "Assassins Creed III",
      asideImageURL: "assets/images/assassin.webp",
      bannerImage: "assets/images/assasin-wallp.webp"
    }]
  beforeEach(async () => {
    BannerDataServiceMocked = jasmine.createSpyObj<BannerDataProviderService>('BannerDataProviderService', ['GetBannerCards'])
    BannerDataServiceMocked.GetBannerCards.and.returnValue(Mocked_data)


    await TestBed.configureTestingModule({
      providers: [{
        provide: BannerDataProviderService,
        useValue: BannerDataServiceMocked
      }],
      imports: [FontAwesomeModule],
      declarations: [BannerComponent, MockAsideCards]
    }).compileComponents()

    fixture = TestBed.createComponent(BannerComponent);
    host = fixture.nativeElement;
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    // Assert
    expect(component).toBeTruthy();
  });
  it('asideClicked SHOULD move forward WHEN user clicks on its aside card', () => {
    // Arrange

    //  Act
    component.asideClicked(1)

    // Assert
    expect(component.activeBanner).toEqual(Mocked_data[0])
  })

  it('asideClicked SHOULD move forward two times WHEN user clicks on its aside card', () => {
    // Arrange

    // Act
    component.asideClicked(2)

    // Assert
    expect(component.activeBanner).toEqual(Mocked_data[1])

  });

  it('asideClicked SHOULD not move forward and returns undefined WHEN that item doesnt exist', () => {
    // Arrange


    // Act
    component.asideClicked(3)

    // Assert
    expect(component.activeBanner).not.toBeDefined()
  });

  it('activeBanner SHOULD be the selected one WHEN page loaded', () => {
    // Arrange

    // Act

    // Assert
    expect(component.activeBanner).toEqual(Mocked_data[0])

  });

  it('shiftActiveBanner SHOULD go to next card WHEN user clicks on next and prevoius button', () => {
    // Arrange

    // Act
    component.moveNext()

    // Assert
    expect(component.activeBanner).toEqual(Mocked_data[1])
  });

  it('shiftActiveBanner SHOULD go to next two card WHEN user clicks twice on next and prevoius button', () => {
    // Arrange

    // Act
    component.moveNext()
    component.moveNext()

    // Assert
    expect(component.activeBanner).toEqual(Mocked_data[0])

  });

  it('shiftActiveBanner SHOULD go to last item two card WHEN user clicks on prevoius item when first banner is active', () => {
    // Arrange

    // Act
    component.movePrevious()

    // Assert
    expect(component.activeBanner).toEqual(Mocked_data[1])

  });

  it('shiftActiveBanner SHOULD go to prevoius item  WHEN user clicks on prevoius button', () => {
    // Arrange

    // Act
    component.moveNext()
    component.moveNext()
    component.movePrevious()

    // Assert
    expect(component.activeBanner).toEqual(Mocked_data[1])
  });


  it('[Template]AsideBannerComponent SHOULD created WHEN parent template initialized', () => {
    // Arrange
    // Act

    // Assert
    let elements = host.querySelectorAll("app-aside-cards")
    expect(elements).toBeDefined()
  });

  it('[Template]BannerComponent first element SHOULD have ngClass WHEN component initializes', () => {
    // Arrange
    let elements = host.querySelectorAll("app-aside-cards")
    let targetElement: HTMLElement | null;
    targetElement = getElementByID('1', elements as any)

    // Act
    expect(targetElement.classList).toContain("activeAside")

  });

  it('[Template]BannerComponent second element SHOULD have ngClass WHEN user clicks on next button', () => {
    // Arrange
    let elements: NodeListOf<HTMLElement>;
    let targetElement: HTMLElement | null;
    let otherElement: HTMLElement | null;

    // Act
    component.moveNext();
    fixture.detectChanges();


    // Assert
    elements = host.querySelectorAll("app-aside-cards");
    targetElement = getElementByID('2', elements as any)
    otherElement = getElementByID('1', elements as any)
    expect(otherElement.classList).not.toContain("activeAside");
    expect(targetElement.classList).toContain("activeAside");

  });
})
;

const getElementByID = (id: string, elements: any[]): HTMLElement => {
  let targetElement: HTMLElement;
  for (let i: number = 0; i < elements.length; i++) {
    if (elements[i].id === id) {
      targetElement = elements[i]
      return targetElement
    }
  }
  throw new Error(`Element with ID ${id} not found`);
}
