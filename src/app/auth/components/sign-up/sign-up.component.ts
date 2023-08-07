import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  hide = true;
  errorMsg: string = '';
  signUpForm = new FormGroup({
    userName: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required])
  })
  constructor(private _AuthService: AuthService){}

  // sign-up Method

  getEmailErrorMessage() {
    if (this.signUpForm.controls['email'].hasError('required')) {
      return 'You must enter a value';
    }
    return this.signUpForm.controls['email'].hasError('email') ? 'Not a valid email' : '';
  }
  getPasswordErrorMessage() {
    if (this.signUpForm.controls['password'].hasError('required')) {
      return 'You must enter a value';
    }
    return;
  }
  getUserNameErrorMessage() {
    if (this.signUpForm.controls['userName'].hasError('required')) {
      return 'You must enter a value';
    }
    return;
  }

    signUp(signUpForm : FormGroup){
      this._AuthService.signUp(signUpForm.controls['email'].value,
        signUpForm.controls['password'].value, signUpForm.controls['userName'].value);
    }

  }

