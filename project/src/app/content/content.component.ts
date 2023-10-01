import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { read, utils } from 'xlsx';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent {
  // Side nav related variables
  data: any; // Variable to store fetched data from Excel
  

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // Fetch data from Excel file when the component initializes
    this.http
      .get('/assets/Data.xlsx', { responseType: 'arraybuffer' })
      .subscribe((data: any) => {
        const datas = new Uint8Array(data); // Convert ArrayBuffer to Uint8Array
        // Parsing the Excel data
        const workbook = read(datas, { type: 'array' });
        const worksheet = workbook.Sheets[workbook.SheetNames[0]];
        this.data = utils.sheet_to_json(worksheet); // Convert worksheet to JSON
        console.log(this.data); // Log the fetched data for debugging
      });
  }
}
