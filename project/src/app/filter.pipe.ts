import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(value: any, searchTearm: any): any {
    if (!searchTearm || typeof searchTearm !== 'string') {
      return value;
    }

    const searchTerms: string[] = searchTearm.toLowerCase().split(',');

    return value.filter(function(search: any) {
      const name: string = search.Name.toLowerCase();
      // Check if any of the search terms are included in the name
      return searchTerms.some(term => name.includes(term.trim()));
    });
  }
  
}
