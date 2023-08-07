import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { WomenFlatComponent } from './components/women-flat/women-flat.component';
import { MenFlatComponent } from './components/men-flat/men-flat.component';
import { ShopBtnComponent } from './components/shop-btn/shop-btn.component';
import { ThemeComponent } from './components/theme/theme.component';
import { FooterComponent } from './components/footer/footer.component';
import { MaterialModule } from '../material/material.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CartBtnComponent } from './components/cart-btn/cart-btn.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NavbarComponent,
        HeaderComponent,
        HeroComponent,
        WomenFlatComponent,
        MenFlatComponent,
        ShopBtnComponent,
        ThemeComponent,
        FooterComponent,
        CartBtnComponent
  ],
  imports: [
    CommonModule ,
    MaterialModule ,
    CarouselModule ,
    RouterModule ,
    FormsModule
    ] ,
  exports : [
    NavbarComponent,
    HeaderComponent,
    HeroComponent,
    WomenFlatComponent,
    MenFlatComponent,
    ShopBtnComponent,
    ThemeComponent,
    FooterComponent ,
    CartBtnComponent
  ]
})
export class SharedModule { }
