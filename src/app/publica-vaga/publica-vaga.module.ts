import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PublicaVagaPageRoutingModule } from './publica-vaga-routing.module';

import { PublicaVagaPage } from './publica-vaga.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PublicaVagaPageRoutingModule
  ],
  declarations: [PublicaVagaPage]
})
export class PublicaVagaPageModule {}
