import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroEmpresaPage } from './cadastro-empresa.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroEmpresaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroEmpresaPageRoutingModule {}
