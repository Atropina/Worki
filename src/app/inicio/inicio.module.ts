import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioPageRoutingModule } from './inicio-routing.module';

import { InicioPage } from './inicio.page';
import { CategoriasComponent } from '../components/categorias/categorias.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioPageRoutingModule
  ],
  entryComponents:[ CategoriasComponent],
  declarations: [InicioPage,CategoriasComponent]
})
export class InicioPageModule {}
