import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PublicaVagaPage } from './publica-vaga.page';

const routes: Routes = [
  {
    path: '',
    component: PublicaVagaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicaVagaPageRoutingModule {}
