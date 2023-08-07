import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  hide = true;
  errorMsg : string = '';
  signInForm = new FormGroup({
    email : new FormControl(null, [Validators.required, Validators.email]) ,
    password : new FormControl(null, [Validators.required])
  })

  constructor(private _AuthService: AuthService, private _Router: Router) { }

  getEmailErrorMessage() {
    if (this.signInForm.controls['email'].hasError('required')) {
      return 'You must enter a value';
    }
    return this.signInForm.controls['email'].hasError('email') ? 'Not a valid email' : '';
  }
  getPasswordErrorMessage() {
    if (this.signInForm.controls['password'].hasError('required')) {
      return 'You must enter a value';
    }
    return;
  }
  signIn(signInFrom : FormGroup){
      this._AuthService.signIn(signInFrom.controls['email'].value ,
        signInFrom.controls['password'].value)
  }

}
