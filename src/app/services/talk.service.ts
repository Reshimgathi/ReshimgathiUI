import { Injectable, Inject } from '@angular/core';
import Swal, { SweetAlertIcon } from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class TalkService {

  constructor() { }

  /**
   * static Success
   */ 
  public Success(p : TalkParam) : void  {
    Swal.fire({
      title: p.Title,
      text: p.Text,
      icon: p.Icon,
      confirmButtonText: p.ConfirmButtonText
    });
  }

  /**
   * Failure
   */
  public Failure(p : TalkParam) : void {
    Swal.fire({
      title: p.Title,
      text: p.Text,
      icon: p.Icon,
      confirmButtonText: p.ConfirmButtonText
    });
  }
}

export class TalkParam {
  public Title : string;

  public Text : string;

  public Icon : SweetAlertIcon;

  public ConfirmButtonText : string;

  public constructor(
    params?: {
        Title?: string,
        Text?: string,
        Icon?: string,
        ConfirmButtonText?: string
    }) {
    if (params) Object.assign(this, params);
}
};
