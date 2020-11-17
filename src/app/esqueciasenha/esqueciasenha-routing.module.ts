import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EsqueciasenhaPage } from './esqueciasenha.page';

const routes: Routes = [
  {
    path: '',
    component: EsqueciasenhaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EsqueciasenhaPageRoutingModule {}
