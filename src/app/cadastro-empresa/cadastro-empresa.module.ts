import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroEmpresaPageRoutingModule } from './cadastro-empresa-routing.module';

import { CadastroEmpresaPage } from './cadastro-empresa.page';
import { HeaderBackComponent } from '../components/header-back/header-back.component';
import { BrMaskerModule } from 'br-mask';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BrMaskerModule,
    CadastroEmpresaPageRoutingModule,
     
  ],
  entryComponents: [HeaderBackComponent],
  declarations: [CadastroEmpresaPage, HeaderBackComponent]
})
export class CadastroEmpresaPageModule {}
