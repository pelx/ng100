import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  transform(value: string[], isAscending = true): string[] {
    if (value === null || value === undefined) {
      return value;

    }

    if (!Array.isArray(value)) {
      throw new Error('Sort by pipe requires an array.');
    }

    return value.sort((a, b) => {
      const upperCaseA = a.toUpperCase();
      const upperCaseB = b.toUpperCase();

      if (upperCaseA < upperCaseB) {
        return isAscending ? -1 : 1;
      }
      if (upperCaseA > upperCaseB) {
        return !isAscending ? -1 : 1;
      }

      return 0;

    });
  }

}
