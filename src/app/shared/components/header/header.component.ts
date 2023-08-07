import { AuthService } from 'src/app/auth/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  centered: boolean = true;
  userData!: any;
  userName: string = '';
  isLogin : boolean = false;
  constructor(private _Router: Router ,  private _AuthService : AuthService) { }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this._Router.events.subscribe((val: any) => {
      if (localStorage.getItem('userData')) {
        this.isLogin= true;
        this.userData = localStorage.getItem('userData');
        this.userName = (JSON.parse(this.userData).userName);
      }else{
        this.isLogin = false;
        this.userName = '' ;
      }
    })


  }
  logOut(){
    this._AuthService.logout();
  }
}
