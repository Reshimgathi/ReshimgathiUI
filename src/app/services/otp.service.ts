import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {map, retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OTPService {
  
  public UserRegData : any = null;
  public Header : HttpHeaders;

  constructor(private _http:HttpClient) {
    this.Header = new HttpHeaders({
      'Content-Type' : 'application/json'
    });
   }

   public SendOTP(channel, type : boolean) : Observable<any> 
    {
      return this._http.post('http://localhost:51542/api/otp/send/'+channel+'/'+type, null, {headers:this.Header})
        .pipe(
          retry(1),
          catchError(this.HandleError),
          map(response => {
            return response;
        }))
    }

    public VerifyOTP(data) : Observable<any> 
    {
      return this._http.post('http://localhost:51542/api/otp/verify', data, {headers:this.Header})
        .pipe(
          retry(1),
          catchError(this.HandleError),
          map(response => {
            return response;
        }))
    }

    //Error Handling
    private HandleError(error) {
      let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // client-side error
            errorMessage = `Error: ${error.error.message}`;
        } else {
            // server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        console.log(errorMessage);

        return throwError(errorMessage);
    }

    // This method is introduced to handle exceptions
    handlePromiseError(error: Response) {
      console.error(error);
      throw(error);
  }
}
