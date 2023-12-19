import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { AllProductsComponent } from './products/components/all-products/all-products.component';
import { CartComponent } from './cart/components/cart/cart.component';
import { ProductDetailsComponent } from './products/components/product-details/product-details.component';
import { SignUpComponent } from './auth/components/sign-up/sign-up.component';
import { SignInComponent } from './auth/components/sign-in/sign-in.component';
import { AuthGuard } from './auth/services/auth.guard';

const routes: Routes = [
  {path : '' , redirectTo : 'home' , pathMatch : 'full'} ,
  {path : 'home' , component : HomeComponent} ,
  {path : 'about' , component : AboutComponent} ,
  {path : 'contact' , component : ContactComponent} ,
  {path : 'products' , component : AllProductsComponent} ,
  {path : 'product-details' , component : ProductDetailsComponent} ,
  {path : 'cart' , component : CartComponent , canActivate : [AuthGuard]} ,
  {path : 'sign-up' , component : SignUpComponent} ,
  {path : 'sign-in' , component : SignInComponent} ,
  {path : '**' , redirectTo : 'home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes , {useHash : true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
