import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioempresaPageRoutingModule } from './inicioempresa-routing.module';

import { InicioempresaPage } from './inicioempresa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioempresaPageRoutingModule
  ],
  declarations: [InicioempresaPage]
})
export class InicioempresaPageModule {}
