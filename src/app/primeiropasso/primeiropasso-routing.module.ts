import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrimeiropassoPage } from './primeiropasso.page';

const routes: Routes = [
  {
    path: '',
    component: PrimeiropassoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrimeiropassoPageRoutingModule {}
