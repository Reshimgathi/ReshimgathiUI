import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  header : any;
  
  constructor(private _http:HttpClient) {
    this.header = new HttpHeaders({
      'Content-Type' : 'application/json'
    });
   }

    LoginVerifyPostCall(data) : Observable<any> 
    {
      return this._http.post('http://localhost:51542/api/login/verify', data, {headers:this.header})
        .pipe(map(response => {
          return response;
        }))
    }

}
