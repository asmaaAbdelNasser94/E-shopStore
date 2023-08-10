import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userInfo = new BehaviorSubject<any>(null);
  constructor(private _AngularFireAuth: AngularFireAuth, private _Router: Router) {
    if (localStorage.getItem('userData') !== null) {
      this.userInfo.next(JSON.parse(localStorage.getItem('userData') || ''))
    }
  }

  // Sign-in Method
  signIn(email: string, password: string) {
    this._AngularFireAuth.signInWithEmailAndPassword(email, password).then((response) => {
      this.userInfo.next({
        userName: response.user?.displayName,
        userEmail: response.user?.email,
        userToken: response.user?.refreshToken
      })
      localStorage.setItem('userData', JSON.stringify(this.userInfo.getValue()))
      localStorage.setItem('userToken', JSON.stringify(this.userInfo.getValue().userToken))

      this._Router.navigate(['/home']);
    }, error => {
      alert(error.message);
    })
  }

  // Sign-up Method
  signUp(email: string, password: string, userName: string) {
    this._AngularFireAuth.createUserWithEmailAndPassword(email, password).then((response) => {

      response.user?.updateProfile({
        displayName: userName
      }).then(() => {
        this._Router.navigate(['/sign-in']);
      })

    }, error => {
      alert(error.code);
    })
  }

  //Logout Method
  logout() {
    this._AngularFireAuth.signOut().then(() => {
      this.userInfo.next(null);
      localStorage.removeItem('userData');
      localStorage.removeItem('userToken');
      this._Router.navigate(['/sign-in']);
    })
  }
}
