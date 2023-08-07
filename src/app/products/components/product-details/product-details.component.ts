import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {
  product : any;
  cartProducts: any[] = [];
  constructor(@Inject(MAT_DIALOG_DATA) public data: any ,
  private _ProductsService : ProductsService) {}
  ngOnInit() {
    this._ProductsService.getProductById(this.data.id).subscribe((response)=>{
    this.product = response;
    })
    if (localStorage.getItem('cart')) {
      this.cartProducts = JSON.parse(localStorage.getItem('cart')!)
    }
  }
}
