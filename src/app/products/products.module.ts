import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { SharedModule } from '../shared/shared.module';
import { NgxHttpLoaderModule } from 'ngx-http-loader';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AllProductsComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule ,
    SharedModule ,
    MaterialModule ,
    NgxHttpLoaderModule.forRoot() ,
    FormsModule
  ],
  exports :[
    AllProductsComponent,
    ProductDetailsComponent
  ]
})
export class ProductsModule { }
