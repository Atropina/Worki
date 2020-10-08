import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuartopassoPageRoutingModule } from './quartopasso-routing.module';

import { QuartopassoPage } from './quartopasso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuartopassoPageRoutingModule
  ],
  declarations: [QuartopassoPage]
})
export class QuartopassoPageModule {}
