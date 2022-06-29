import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class UsersdataService {
  apiURL = environment.apiURL

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get(this.apiURL)
  }

  
  searchvalue = new Subject()

  setSeachValue(value:string) {
    this.searchvalue.next(value)
  }

}
