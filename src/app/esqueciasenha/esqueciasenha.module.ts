import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EsqueciasenhaPageRoutingModule } from './esqueciasenha-routing.module';

import { EsqueciasenhaPage } from './esqueciasenha.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EsqueciasenhaPageRoutingModule
  ],
  declarations: [EsqueciasenhaPage]
})
export class EsqueciasenhaPageModule {}
