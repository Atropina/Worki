import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VagasculinariaPageRoutingModule } from './vagasculinaria-routing.module';

import { VagasculinariaPage } from './vagasculinaria.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VagasculinariaPageRoutingModule
  ],
  declarations: [VagasculinariaPage]
})
export class VagasculinariaPageModule {}
