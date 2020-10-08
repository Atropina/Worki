import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabPage } from './tab.page';

const routes: Routes = [
  {
    path: '',
    component: TabPage,
    children: [
      {
        path: 'feed',
        loadChildren: () => import("../tab1/tab1.module").then (m =>m.Tab1PageModule)
      },
      {
        path: 'perfil',
        loadChildren: () => import("../tab2/tab2.module").then(m =>m.Tab2PageModule)
      },
      {
        path: 'chat',
        loadChildren: () => import("../tab3/tab3.module").then(m =>m.Tab3PageModule)
      },
      {
        path: "",
        redirectTo: "/tab/feed",
        pathMatch: 'full'
      }
    ]
  },
  {
    path: ''  ,
    redirectTo: '/tab/feed',
    pathMatch: "full"
    
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabPageRoutingModule {}
