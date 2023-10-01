import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { read, utils, WorkBook, WorkSheet } from 'xlsx';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  // Side nav related variables
  searchName: string = '';
  selectedJobTitles: string[] = [];
  selectedEmployees: string[] = [];
  selectedCompanies: string[] = [];
  data: any;
  companySize: Set<string> = new Set<string>();  //for the options
  companytitle: Set<string> = new Set<string>(); 
  jobname: Set<string> = new Set<string>(); 
  constructor(private http: HttpClient) {}

  ngOnInit() {
    /// Fetch data from Excel file when the component initializes
    this.http
      .get('/assets/Data.xlsx', { responseType: 'arraybuffer' })
      .subscribe((data: any) => {
        const datas = new Uint8Array(data); // Convert ArrayBuffer to Uint8Array
        // Parsing the Excel data
        const workbook: WorkBook = read(datas, { type: 'array' });
        const worksheet: WorkSheet = workbook.Sheets[workbook.SheetNames[0]];
        this.data = utils.sheet_to_json(worksheet); // Convert worksheet to JSON
        console.log(this.data); // Log the fetched data for debugging
        
        // Collect unique company sizes
        this.data.forEach((item: any) => {
          this.companySize.add(item.CompanySize);
          this.jobname.add(item.JobTitles);
          this.companytitle.add(item.CompanyName);
        });
  
  
      })
  
  }
  // Method to remove Job Title chip
  removeJobTitle(jobTitle: string): void {
    const index = this.selectedJobTitles.indexOf(jobTitle);
    if (index >= 0) {
      this.selectedJobTitles.splice(index, 1);
      this.selectedJobTitles = [...this.selectedJobTitles]; // Update ngModel to trigger change detection
    }
  }

  removeEmployee(employee: string): void {
    const index = this.selectedEmployees.indexOf(employee);
    if (index >= 0) {
      this.selectedEmployees.splice(index, 1);
      this.selectedEmployees = [...this.selectedEmployees]; // Update ngModel to trigger change detection
    }
  }

  removeCompanyName(companyName: string): void {
    const index = this.selectedCompanies.indexOf(companyName);
    if (index >= 0) {
      this.selectedCompanies.splice(index, 1);
      this.selectedCompanies = [...this.selectedCompanies]; // Update ngModel to trigger change detection
    }
  }

  // Method to get the count of selected job titles
  getSelectedJobTitlesCount(): number {
    return this.selectedJobTitles.length;
  }

  // Method to get the count of selected employees
  getSelectedEmployeesCount(): number {
    return this.selectedEmployees.length;
  }

  // Method to get the count of selected company names
  getSelectedCompaniesCount(): number {
    return this.selectedCompanies.length;
  }
}
