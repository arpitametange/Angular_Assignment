import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], filters: any): any {
    return items.filter(item => {
      const nameMatch = item.Name.toLowerCase().includes(filters.searchName.toLowerCase());
      const jobTitlesMatch = filters.selectedJobTitles.length === 0 || filters.selectedJobTitles.includes(item.JobTitles);
      const employeesMatch = filters.selectedEmployees.length === 0 || filters.selectedEmployees.includes(item.CompanySize);
      const companiesMatch = filters.selectedCompanies.length === 0 || filters.selectedCompanies.includes(item.CompanyName);

      return nameMatch && jobTitlesMatch && employeesMatch && companiesMatch;
    });
  }
}
