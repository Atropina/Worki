import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadAlunoPage } from './cad-aluno.page';

const routes: Routes = [
  {
    path: '',
    component: CadAlunoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadAlunoPageRoutingModule {}
