import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'flatten',
  pure: false
})
export class FlattenPipe implements PipeTransform {

  transform(values: any[]): any[] {
    return this.flattenArray(values);
  }

  private flattenArray(arr: any[]): any[] {
    const result = [];

    arr.forEach((value) => {
      if (Array.isArray(value)) {
        result.push(...this.flattenArray(value));
      } else {
        result.push(value);
      }
    });
    return result;
  }
}
