import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuintopassoPageRoutingModule } from './quintopasso-routing.module';

import { QuintopassoPage } from './quintopasso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuintopassoPageRoutingModule
  ],
  declarations: [QuintopassoPage]
})
export class QuintopassoPageModule {}
