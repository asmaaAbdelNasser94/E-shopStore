import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './components/cart/cart.component';
import { MaterialModule } from '../material/material.module';
import { NgxHttpLoaderModule } from 'ngx-http-loader';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule ,
    MaterialModule ,
    NgxHttpLoaderModule.forRoot() ,
    FormsModule
  ] ,
  exports : [
    CartComponent
  ]
})
export class CartModule { }
