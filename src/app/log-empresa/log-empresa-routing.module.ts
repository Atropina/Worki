import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogEmpresaPage } from './log-empresa.page';

const routes: Routes = [
  {
    path: '',
    component: LogEmpresaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogEmpresaPageRoutingModule {}
