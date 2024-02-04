import { TestBed } from '@angular/core/testing';
import { DateConverter } from './convert-date-to-second.service';

fdescribe('ConvertDateToSecondService', () => {
  let service: DateConverter;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DateConverter);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('calculateDate SHOULD return second WHEN a date input arrives', () => {
    // Arrange
    // Act
    // Assert
    const calcDate: Date = service.calculateDate(20)
    expect(calcDate).toEqual(new Date(new Date().getTime() - 24 * 60 * 60 * 20))

  });
});
