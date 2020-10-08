import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuintopassoPage } from './quintopasso.page';

const routes: Routes = [
  {
    path: '',
    component: QuintopassoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuintopassoPageRoutingModule {}
