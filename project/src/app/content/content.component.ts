import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { read, utils } from 'xlsx';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  data: any;

  constructor(private http:HttpClient) { }

  ngOnInit() {
    const file = new File(['Data.xlsx'], 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');

    const reader = new FileReader();
    reader.onload = (e: any) => {
      const workbook = read(e.target.result);
      const worksheet = workbook.Sheets[workbook.SheetNames[0]];
      this.data = utils.sheet_to_json(worksheet);
    };

    reader.readAsArrayBuffer(file);
    this.http.get('/src/assets/Data.xlsx').subscribe((data) => {
      this.data = data;
    });
  }


}