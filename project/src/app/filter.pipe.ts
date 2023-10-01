import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  // This method transforms the input array of items based on the specified filters.
  transform(items: any[], filters: any): any {
    // Use the filter method to iterate over each item in the input array.
    return items.filter(item => {
      // Check if the lowercase version of item's Name includes the lowercase version of searchName.
      const nameMatch = item.Name.toLowerCase().includes(filters.searchName.toLowerCase());

      // Check if selectedJobTitles array is empty or if item's JobTitles is in the selectedJobTitles array.
      const jobTitlesMatch = filters.selectedJobTitles.length === 0 || filters.selectedJobTitles.includes(item.JobTitles);

      // Check if selectedEmployees array is empty or if item's CompanySize is in the selectedEmployees array.
      const employeesMatch = filters.selectedEmployees.length === 0 || filters.selectedEmployees.includes(item.CompanySize);

      // Check if selectedCompanies array is empty or if item's CompanyName is in the selectedCompanies array.
      const companiesMatch = filters.selectedCompanies.length === 0 || filters.selectedCompanies.includes(item.CompanyName);

      // Return true if all filter conditions are met, indicating that the item should be included in the filtered result.
      return nameMatch && jobTitlesMatch && employeesMatch && companiesMatch;
    });
  }
}
