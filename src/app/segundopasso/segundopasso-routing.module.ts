import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SegundopassoPage } from './segundopasso.page';

const routes: Routes = [
  {
    path: '',
    component: SegundopassoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SegundopassoPageRoutingModule {}
