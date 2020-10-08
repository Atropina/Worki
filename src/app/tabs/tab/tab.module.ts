import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabPageRoutingModule } from './tab-routing.module';

import { TabPage } from './tab.page';
import { Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'tab',
    component: TabPage,
    children: [
      {
        path: 'schedule',
        children: [
          {
            path: '',
            loadChildren: '../tab2/tab2.module '
          }
        ]
      },
      {
        path: '',
        redirectTo: '../tab2/tab2.module',
        pathMatch: 'full'
      }
    ]
  }
];


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabPageRoutingModule
  ],
  declarations: [TabPage]
})
export class TabPageModule { }
