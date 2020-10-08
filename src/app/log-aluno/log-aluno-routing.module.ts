import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogAlunoPage } from './log-aluno.page';

const routes: Routes = [
  {
    path: '',
    component: LogAlunoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogAlunoPageRoutingModule {}
