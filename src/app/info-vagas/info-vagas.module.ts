import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoVagasPageRoutingModule } from './info-vagas-routing.module';

import { InfoVagasPage } from './info-vagas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoVagasPageRoutingModule
  ],
  declarations: [InfoVagasPage]
})
export class InfoVagasPageModule {}
