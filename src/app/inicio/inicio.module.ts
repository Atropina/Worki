import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioPageRoutingModule } from './inicio-routing.module';

import { InicioPage } from './inicio.page';
import { CategoriasComponent } from '../components/categorias/categorias.component';
import { HeaderBackComponent } from '../components/header-back/header-back.component';
import { VagasComponent } from '../components/vagas/vagas.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioPageRoutingModule
  ],
  entryComponents:[ CategoriasComponent, HeaderBackComponent, VagasComponent],
  declarations: [InicioPage,CategoriasComponent, HeaderBackComponent, VagasComponent]
})
export class InicioPageModule {}
