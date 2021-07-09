import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByKey'
})
export class SortByKeyPipe implements PipeTransform {

  transform(value: { [ key: string ]: string; }[], key: string, isAscending = true): { [ key: string ]: string }[] {
    if (value === null || value === undefined) {
      return value;
    }

    if (!Array.isArray(value)) {
      throw new Error('Sort by key requires an array.');
    }

    const values = [ ...value ];
    return values.sort((a, b) => {
      const upperCaseA = a[ key ].toLowerCase();
      const upperCaseB = b[ key ].toLowerCase();

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
