import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { read, utils } from 'xlsx';
import { DataService } from '../data.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
  data: any;

  constructor(private http:HttpClient,private dataService: DataService) { }
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

  search(query:any): void {
    this.dataService.setSearchData(query.target.value);
  }
    
}
