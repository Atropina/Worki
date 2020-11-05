import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerificaEmailPage } from './verifica-email.page';

const routes: Routes = [
  {
    path: '',
    component: VerificaEmailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerificaEmailPageRoutingModule {}
