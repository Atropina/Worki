import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadAlunoPageRoutingModule } from './cad-aluno-routing.module';

import { CadAlunoPage } from './cad-aluno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadAlunoPageRoutingModule
  ],
  declarations: [CadAlunoPage]
})
export class CadAlunoPageModule {}
