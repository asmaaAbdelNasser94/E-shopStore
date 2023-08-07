import { Component } from '@angular/core';
import { NgxLoader } from 'ngx-http-loader';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  public loader = NgxLoader; // <============

  hide: boolean = false;
}
