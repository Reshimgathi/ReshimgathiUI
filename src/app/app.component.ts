import { Component, Inject } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ReshimgathiUI';
  ShowPreHeader :any = false;
  ShowNextHeader :any = false;

  constructor(private _router : Router)
  {
    _router.events.forEach((event) => {
      if(event instanceof NavigationStart)
      {
        if(event['url'] == '/Login' || event['url'] == '/Signup' || event['url'] == '/' )
        {
          this.ShowPreHeader = true; 
          this.ShowNextHeader = false;
        }
        else if(event['url'] == '/Dashboard' || event['url'] == '/Edit' 
          || event['url'] == '/ChangePassword' || event['url'] == '/ContactUs'
          || event['url'] == '/Account' || event['url'] == '/Brides'
          || event['url'] == '/Grooms' || event['url'] == '/Search'
          || event['url'] == '/Favourites'
          )
        {
          this.ShowNextHeader = true;
          this.ShowPreHeader = false;
        }
        else{
          this.ShowPreHeader = true;
          this.ShowNextHeader = false;
        }
      }
    })
  }

}
