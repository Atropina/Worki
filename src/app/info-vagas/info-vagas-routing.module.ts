import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoVagasPage } from './info-vagas.page';

const routes: Routes = [
  {
    path: '',
    component: InfoVagasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoVagasPageRoutingModule {}
