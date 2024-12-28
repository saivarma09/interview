import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RxjsService {

  constructor(private http:HttpClient) { }


  getSearchInfo(searchText:any):Observable<any>{
    let info ={
      q:searchText
    }
   return this.http.get('https://dummyjson.com/users/search',{params:info})
  } 
}
