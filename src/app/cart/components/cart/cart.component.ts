import { Component, OnInit } from '@angular/core';
import { NgxLoader } from 'ngx-http-loader';
import { Observable } from 'rxjs';
import { ProductsService } from 'src/app/products/services/products.service';
import { StringMappingType } from 'typescript';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  public loader = NgxLoader; // <============
  displayedColumns: string[] = ['Product', 'Price', 'Quantity', 'Total'];
  getProducts: any[] = [];
  cartProducts: any[] = [];
  quantity!: number;
  final: any[] = [];
  total: number = 0;
  grandTotal: number = 0;
  priceBox: number[] = [];
  discount: number = 0;
  items!:number;
  isShow : any = localStorage.getItem('cart');
  constructor(private _ProductsService: ProductsService) { }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class. if (localStorage.getItem('cart')) {
    this.displayProducts();
  }

  // refresh needed
  refresh(): void {
    window.location.reload()
  }
  // get cart products
  displayProducts() {
  this.cartProducts = JSON.parse(localStorage.getItem('cart')!);
    if (this.cartProducts?.length > 0) {
      for (let i = 0; i < this.cartProducts.length; i++) {
        this._ProductsService.getProductById(this.cartProducts[i].id).subscribe((response) => {
          response['quantity'] = this.cartProducts[i].quantity;
          this.getProducts.push(response);
          this.priceBox.push(response.price * response.quantity);
          // console.log(this.priceBox);
          this.final = [...this.getProducts];
          this.items = this.final.length;
          this.calcTotal()
        })
      }
    }
    // this.calcTotal()
  }

  // delete all products
  deleteCart() {
    localStorage.removeItem('cart');
    this.cartProducts = [];
    window.location.reload();
  }

  // Calculate Subtotal
  calcTotal() {
    if (this.priceBox.length > 0) {
      this.total = this.priceBox.reduce((sum, x) => {
        return sum + x;
      })
      this.discount = 8;
      this.grandTotal = this.total - 8;
      console.log(this.total);
    }
  }
  // decrement process
  incProQunty(id: number) {
    this.cartProducts.find((e) => {
      if (e.id == id) {
        e.quantity += 1;
        this.quantity = e.quantity;
        localStorage.setItem('cart', JSON.stringify(this.cartProducts))
        // this.displayProducts();
        this.refresh();
      }

    })
  }
  // increment process
  decProQunty(id: number) {
    this.cartProducts.find((e) => {
      if (e.id == id) {
        if (e.quantity > 1) {
          e.quantity -= 1;
          localStorage.setItem('cart', JSON.stringify(this.cartProducts))
          this.refresh();
        } else if (e.quantity == 1) {
          const index = this.cartProducts.indexOf(e);
          this.cartProducts.splice(index, 1);
          console.log(this.cartProducts);
          localStorage.setItem('cart', JSON.stringify(this.cartProducts));
          this.refresh()
        }
      }
    })
  }

  // onQuntyChange
  quntyChange(id: number) {
    this.cartProducts.find((e) => {
      if (e.id == id) {
        if (this.quantity >= 1) {
          e.quantity = this.quantity;
          localStorage.setItem('cart', JSON.stringify(this.cartProducts))
          this.refresh();
        }
        else if (this.quantity < 1) {
          this.quantity = e.quantity;
          console.log(e.quantity);
          localStorage.setItem('cart', JSON.stringify(this.cartProducts));
          this.refresh()
        }
      }
    })

  }
}
