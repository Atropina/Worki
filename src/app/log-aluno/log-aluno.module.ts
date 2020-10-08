import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogAlunoPageRoutingModule } from './log-aluno-routing.module';

import { LogAlunoPage } from './log-aluno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogAlunoPageRoutingModule
  ],
  declarations: [LogAlunoPage]
})
export class LogAlunoPageModule {}
