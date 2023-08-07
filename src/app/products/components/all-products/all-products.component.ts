import { Component, Output } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { MatDialog } from '@angular/material/dialog';
import { NgxLoader } from 'ngx-http-loader';
import { Router } from '@angular/router';
declare var $ :any;

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent {
  public loader = NgxLoader; // <============
  myIndex! : number;
  isOpen : boolean = true;
  isClicked : boolean = false;
  mode : any = 'side';
  productId: number = 0;
  sort!: string;
  allProducts: any[] = [];
  productByCategory: any[] = [];
  cartProducts: any[] = [];
  category!: string;
  quantity : number = 1;
  allCategories: string[] = ['Electronics', 'Jewelery', "Men's Clothing", "Women's Clothing"]

  // test
  @Output() i! : number;
  // end test
  constructor(private _ProductsService: ProductsService,
    private _Router: Router,
    public dialog: MatDialog) { }
  ngOnInit(): void {
    // get all products
    this.getAllProduct();
    if (localStorage.getItem('cart')) {
      this.cartProducts = JSON.parse(localStorage.getItem('cart')!)
    }
    // Jquery
    $(document).ready(()=>{
      if ($(window).width() < 1200) {
        this.isOpen = false
        this.mode = 'over';
      }
      $(window).resize(()=> {
        if ($(window).width() < 1200) {
          this.isOpen = false
          this.mode = 'over';
        }else{
          this.isOpen = true;
          this.mode = 'side';
        }

      })
    })
  }
  // show product details
  openProductDialog() {
    this.dialog.open(ProductDetailsComponent, {
      data: {
        id: this.productId
      },
    });
  }
  // get all products
  getAllProduct() {
    this._ProductsService.getAllProducts().subscribe((response) => {
      this.allProducts = response;
      console.log(response);

    })
  }
  // Filter by cateegory
  filterProductsByCategory(category = this.category.toLocaleLowerCase()) {
    this._ProductsService.getProductsByCategory(category).subscribe((response) => {
      this.productByCategory = response;
      this.sortByPrice();
    })
  }
  // Filter by price
  sortByPrice() {
    switch (this.sort) {
      case "low": {
        this.allProducts.sort((low, high) => low.price - high.price)
        this.productByCategory.sort((low, high) => low.price - high.price)
        break;
      }
      case "high": {
        this.allProducts.sort((low, high) => high.price - low.price)
        this.productByCategory.sort((low, high) => high.price - low.price)
        break;
      }
    }
  }
  // Clear filter data
  clearFilter() {
    this.category = "";
    this.sort = "";
    this.getAllProduct();
  }
}
