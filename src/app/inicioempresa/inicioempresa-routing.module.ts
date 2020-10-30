import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioempresaPage } from './inicioempresa.page';

const routes: Routes = [
  {
    path: '',
    component: InicioempresaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioempresaPageRoutingModule {}
