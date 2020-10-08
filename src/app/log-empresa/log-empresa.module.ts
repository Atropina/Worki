import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogEmpresaPageRoutingModule } from './log-empresa-routing.module';

import { LogEmpresaPage } from './log-empresa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogEmpresaPageRoutingModule
  ],
  declarations: [LogEmpresaPage]
})
export class LogEmpresaPageModule {}
