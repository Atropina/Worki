import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroCandidatoPage } from './cadastro-candidato.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroCandidatoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroCandidatoPageRoutingModule {}
