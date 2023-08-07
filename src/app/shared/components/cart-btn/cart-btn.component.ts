import { Component, Input, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-btn',
  templateUrl: './cart-btn.component.html',
  styleUrls: ['./cart-btn.component.scss']
})
export class CartBtnComponent {
  myIndex!: number;
  isClicked: boolean = false;
  quantity: number = 1;
  @Input() cartProducts: any[] = [];
  @Input() i! : number;
  @Input() productId! : number;
  constructor(private _Router: Router) { }

  // check Login
  checkLogin(productId: number) {
    if (localStorage.getItem('userToken')) {
      this.addProduct(productId)
    } else {
      this._Router.navigate(['/sign-in'])
      console.log('out');
    }
  }
  // // Add product to cart
  addProduct(id: number, quantity: number = this.quantity) {
    if (this.cartProducts.some(ele => (ele.id == id))){
      this.cartProducts.forEach(ele => {
        if (ele.id == id) {
          ele.quantity += quantity;
          }
          })
      localStorage.setItem('cart', JSON.stringify(this.cartProducts))
      console.log(this.cartProducts);
    } else {
      this.cartProducts.push({ id: id, quantity: quantity });
      localStorage.setItem('cart', JSON.stringify(this.cartProducts))
      console.log(this.cartProducts);
    }
  }

}
