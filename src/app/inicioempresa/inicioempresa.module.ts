import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioempresaPageRoutingModule } from './inicioempresa-routing.module';

import { InicioempresaPage } from './inicioempresa.page';
import { CardCandidatoComponent } from '../components/card-candidato/card-candidato.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioempresaPageRoutingModule
  ],
  entryComponents: [CardCandidatoComponent],
  declarations: [InicioempresaPage, CardCandidatoComponent]
})
export class InicioempresaPageModule {}
