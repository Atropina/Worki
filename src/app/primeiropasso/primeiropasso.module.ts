import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrimeiropassoPageRoutingModule } from './primeiropasso-routing.module';

import { PrimeiropassoPage } from './primeiropasso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrimeiropassoPageRoutingModule
  ],
  declarations: [PrimeiropassoPage]
})
export class PrimeiropassoPageModule {}
