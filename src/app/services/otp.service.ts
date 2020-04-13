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

   SendOTP2(channel: any) {
    const promise = new Promise((resolve, reject) => {
      const apiURL = "http://localhost:51542/api/otp/send/" + channel;
      this._http
        .get(apiURL)
        .toPromise()
        .then((response: any) => {
          // Success
          console.log(JSON.stringify(response));
          return JSON.stringify(response);
        },
          err => {
            // Error
            reject(err);
          }
        );
    });
    return promise;
  }

   public SendOTP(channel) : Observable<any> 
    {
      return this._http.post('http://localhost:51542/api/otp/send/'+channel, null, {headers:this.Header})
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
