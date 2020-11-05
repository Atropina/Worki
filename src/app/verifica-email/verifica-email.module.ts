import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerificaEmailPageRoutingModule } from './verifica-email-routing.module';

import { VerificaEmailPage } from './verifica-email.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerificaEmailPageRoutingModule
  ],
  declarations: [VerificaEmailPage]
})
export class VerificaEmailPageModule {}
