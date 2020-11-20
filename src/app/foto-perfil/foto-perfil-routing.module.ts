import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FotoPerfilPage } from './foto-perfil.page';

const routes: Routes = [
  {
    path: '',
    component: FotoPerfilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FotoPerfilPageRoutingModule {}
