import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from './empLogin/authservice.service';
import firebase from 'firebase/app';
import { firebaseConfig } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  constructor(public _auth:AuthserviceService) { }
  title = 'emp-app';
  redfirebaseConfig=firebaseConfig
  ngOnInit(){
   firebase.initializeApp(this.redfirebaseConfig);
  }
}