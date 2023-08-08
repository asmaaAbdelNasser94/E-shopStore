import { OwlOptions } from 'ngx-owl-carousel-o';
import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  slidesStore : string[] = [
    "../../../../assets/imgs/hero.jpeg" ,
    "../../../../assets/imgs/hero2.jpeg" ,
    "../../../../assets/imgs/hero3.jpeg" ,
    "../../../../assets/imgs/hero4.jpeg"
  ];
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    animateOut: 'fadeOut' ,
    navText: ['', ''],
    nav: true ,
    autoplay : true ,
    autoplayTimeout : 5000 ,
    autoplaySpeed : 1000 ,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      }
    }
  }
}
