import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoVagasPageRoutingModule } from './info-vagas-routing.module';

import { InfoVagasPage } from './info-vagas.page';
import { HeaderBackComponent } from '../components/header-back/header-back.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoVagasPageRoutingModule
  ], 
  entryComponents:[],
  declarations: [InfoVagasPage]
})
export class InfoVagasPageModule {}
