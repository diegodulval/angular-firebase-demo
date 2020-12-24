import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { Observer } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  user: any = {
    name: 'Lucas Moreira'
  }
  // email: any

  loading: boolean = false

  constructor(private afAuth: AngularFireAuth) {}

  ngOnInit(): void {  }

  login = () => {
    this.appGoogleSignin().subscribe((opa: any) => {
      console.log('OPA >>>> ', opa)
      this.user.email = opa
    }, e => {
      console.log('OPA ERRO >>>> ', e)
    })
  }

  appGoogleSignin(): Observable<any> {
    return new Observable((observer: Observer<any>) => {
      this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then((res: any) => {
        observer.next(res.user.email)
        observer.complete()
      }).catch(e => {
        console.log('ERRO CATCH >>>> ', e)
        observer.error(e)
      })
    })
  }

}
