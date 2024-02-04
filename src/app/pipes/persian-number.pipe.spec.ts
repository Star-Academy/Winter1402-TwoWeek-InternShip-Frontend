import {PersianNumberPipe} from "./persian-number.pipe";

describe('Persianize number Test', () => {
  let persian_pipe: PersianNumberPipe;

  beforeEach(() => {
    persian_pipe = new PersianNumberPipe()
  })
  it('persianNumber pipe SHOULD return a persian number WHEN its input is a number', () => {
    // Arrange

    // Act
    const value: string = persian_pipe.transform("0123456789")


    // Assert
    expect(value).toBe("۰۱۲۳۴۵۶۷۸۹")

  });

  it('persianNumber pipe SHOULD return a persian number WHEN its input is a string contain numbers', () => {
    // Arrange

    // Act
    const value: string = persian_pipe.transform("HeloW192A")


    // Assert
    expect(value).toBe("HeloW۱۹۲A")
  });

  it('persianNumber pipe SHOULD not modify an string WHEN there is no numeric letter in it', () => {
    // Arrange

    // Act
    const value: string = persian_pipe.transform("HelloWorld")


    // Assert
    expect(value).toBe("HelloWorld")
  });
})
