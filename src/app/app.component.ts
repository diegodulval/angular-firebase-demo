import { Component } from '@angular/core';
import * as firebase from 'firebase/app';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'text-intention';
  constructor(){
    if (firebase.apps.length === 0){
      firebase.initializeApp(environment.firebase)
    }
  }
}
