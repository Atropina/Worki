import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TerceiropassoPageRoutingModule } from './terceiropasso-routing.module';

import { TerceiropassoPage } from './terceiropasso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TerceiropassoPageRoutingModule
  ],
  declarations: [TerceiropassoPage]
})
export class TerceiropassoPageModule {}
