import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'persianNumber'
})
export class PersianNumberPipe implements PipeTransform {

  transform(value: string | number): string {
    if (!value) {
      return value as string;
    }

    const stringValue: string = value.toString();

    const numberMap: { [key: string]: string } = {
      '0': '۰',
      '1': '۱',
      '2': '۲',
      '3': '۳',
      '4': '۴',
      '5': '۵',
      '6': '۶',
      '7': '۷',
      '8': '۸',
      '9': '۹'
    };

    return stringValue.replace(/[0-9]/g, (match) => numberMap[match]);
  }
}
