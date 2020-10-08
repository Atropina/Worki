import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SegundopassoPageRoutingModule } from './segundopasso-routing.module';

import { SegundopassoPage } from './segundopasso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SegundopassoPageRoutingModule
  ],
  declarations: [SegundopassoPage]
})
export class SegundopassoPageModule {}
