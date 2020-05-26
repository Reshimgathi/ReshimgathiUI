import { Component, OnInit } from '@angular/core';
import { Injectable, Injector } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import {AuthService} from '../services/auth.service';
import {UserProfileService} from '../services/user-profile.service';
import { SessionHelperService } from '../services/session-helper.service';
import { TalkService, TalkParam } from '../services/talk.service';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor( 
    private _Router : Router,
    private _UserProfileService : UserProfileService,
    private _Talk : TalkService,
    private _SessionHelper : SessionHelperService,
    private _Injector:Injector) { }

  ngOnInit(): void {
  }

}
