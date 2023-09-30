import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private searchDataSubject = new BehaviorSubject<string>('');

  setSearchData(searchData: string): void {
    this.searchDataSubject.next(searchData);
  }

  getSearchData(): Observable<string> {
    return this.searchDataSubject.asObservable();
  }
}
