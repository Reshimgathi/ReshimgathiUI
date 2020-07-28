import { Component, OnInit } from '@angular/core';

declare const $: any;

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function() {
 
      $('.generate-password').click(function(e){
          // First check which link was clicked
          var linkId = $(this).attr('id');
          var password = $.password(12,true);

          $('#suggest-password').val(password);
          e.preventDefault();
      });
  });

  $.extend({
    password: function (length, special) {
      var iteration = 0;
      var password = "";
      var randomNumber;
      var special;
      if(special === undefined){
          special = false;
      }
      while(iteration < length){
          randomNumber = (Math.floor((Math.random() * 100)) % 94) + 33;
          if(!special){
              if ((randomNumber >=33) && (randomNumber <=47)) { continue; }
              if ((randomNumber >=58) && (randomNumber <=64)) { continue; }
              if ((randomNumber >=91) && (randomNumber <=96)) { continue; }
              if ((randomNumber >=123) && (randomNumber <=126)) { continue; }
          }
          iteration++;
          password += String.fromCharCode(randomNumber);
      }
      return password;
    }
  });
  }

}
