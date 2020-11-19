import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogAlunoPageRoutingModule } from './log-aluno-routing.module';

import { LogAlunoPage } from './log-aluno.page';
import { EsqueciSenhaComponent } from '../components/esqueci-senha/esqueci-senha.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogAlunoPageRoutingModule
    
  ],
  entryComponents :[EsqueciSenhaComponent],
  declarations: [LogAlunoPage, EsqueciSenhaComponent]
})
export class LogAlunoPageModule {}
