import { Router } from '@angular/router';
import { Component, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NgxLoader } from 'ngx-http-loader';
import { BehaviorSubject } from 'rxjs';
import { ProductDetailsComponent } from 'src/app/products/components/product-details/product-details.component';
import { ProductsService } from 'src/app/products/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public loader = NgxLoader; // <============
  myIndex!: number;
  isClicked: boolean = false;
  quantity: number = 1;
  productId!: number;
  defaultProduct : BehaviorSubject<any> = new BehaviorSubject('electronics')
  Categories: string[] = [];
  productsByCategory : any[] = [];
  cartProducts: any[] = [];
  limitProducts : any[] = [];
  constructor(public dialog: MatDialog ,
    private _Router : Router ,
    private _ProductsService : ProductsService){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    // get cart products from storage
    if(localStorage.getItem('cart')){
      this.cartProducts = JSON.parse(localStorage.getItem('cart')!)
    }
    this.getCategories()
    this.getProductsByCategory()
    this.getLimitProducts()
  }
  openVideoDialog() {
    this.dialog.open(VideoDialog);
  }
  openProductDialog() {
    this.dialog.open(ProductDetailsComponent, {
      data: {
        id : this.productId
      },
    });
  }
  getCategories() : void{
    this._ProductsService.getCategories().subscribe((response)=>{
      this.Categories = response;
    })
  }
  getProductsByCategory() : void{
    this.defaultProduct.subscribe(()=>{
      this._ProductsService.getProductsByCategory(this.defaultProduct.getValue()).subscribe((response)=>{
        this.productsByCategory = response;
    })
    })
  }
  getLimitProducts() :void{
    this._ProductsService.getLimitProducts(8).subscribe((response)=>{
      this.limitProducts = response;
    })
  }
  // Check if login then add product to cart
  checkLogin(productId : number) {
    if (localStorage.getItem('userToken')) {
      this.addProduct(productId)
    } else {
      this._Router.navigate(['/sign-in'])
      console.log('out');
    }
  }
  // Add product to cart
  addProduct(id: number, quantity: number = this.quantity) {
    if (this.cartProducts.some(ele => (ele.id == id))) {
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
@Component({
  selector: 'video-dialog',
  templateUrl: './video-dialog.html'
})
export class VideoDialog {}
