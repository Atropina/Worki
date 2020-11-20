import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FotoPerfilPageRoutingModule } from './foto-perfil-routing.module';

import { FotoPerfilPage } from './foto-perfil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FotoPerfilPageRoutingModule
  ],
  declarations: [FotoPerfilPage]
})
export class FotoPerfilPageModule {}
