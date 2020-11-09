import { Component } from '@angular/core';
import { IonSlides } from '@ionic/angular'



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  slideOptions = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true,
    speed: 1000
  };

  constructor() { }


}