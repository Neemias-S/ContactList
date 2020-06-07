import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../model/Contact';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {

  constructor(
    public http : HttpClient
  ) { }

  public findAll() : Observable<any>{
    return this.http.get(`http://localhost:8080/contact`);
  }  
  
  
  public getMoreUsers(qauntity : Number) : Observable<any>{
    return this.http.get(`http://localhost:8080/contact/buscar/${qauntity}`);
  }


}
