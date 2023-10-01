import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { read, utils } from 'xlsx';
import { DataService } from '../data.service';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  searchData: any;

  // side nav code
  data: any;
  selectedJobTitles:any
  constructor(private http:HttpClient,private dataService: DataService) {
    // this.dataService.setSearchData(this.selectedJobTitles)

    // this.dataService.getSearchData().subscribe(data => {
    //   this.searchData = data;
    // });
   }
  form = new FormControl('');
  JobList:any

  ngOnInit() {
  this.http.get('/assets/Data.xlsx', { responseType: 'arraybuffer' }).subscribe(
    (data: any) => {
      const datas = new Uint8Array(data); // Convert ArrayBuffer to Uint8Array
      // Parsing the Excel data
      const workbook = read(datas, { type: 'array' });
      const worksheet = workbook.Sheets[workbook.SheetNames[0]];
      this.data = utils.sheet_to_json(worksheet);
      console.log(this.data);
      this.JobList=this.data.JobTitle

    })}
 
  
    
      
      }




      
    
    
    
  


