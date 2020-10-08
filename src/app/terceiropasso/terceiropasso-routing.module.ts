import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TerceiropassoPage } from './terceiropasso.page';

const routes: Routes = [
  {
    path: '',
    component: TerceiropassoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TerceiropassoPageRoutingModule {}
