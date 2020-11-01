import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [  
  {
    path: '',
    redirectTo: 'question',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },

  {
    path: 'log-aluno',
    loadChildren: () => import('./log-aluno/log-aluno.module').then( m => m.LogAlunoPageModule)
  },
  {
    path: 'log-empresa',
    loadChildren: () => import('./log-empresa/log-empresa.module').then( m => m.LogEmpresaPageModule)
  },
  {
    path: 'cad-aluno',
    loadChildren: () => import('./cad-aluno/cad-aluno.module').then( m => m.CadAlunoPageModule)
  },
  {
    path: 'tab',
    loadChildren: () => import('./tabs/tab/tab.module').then( m => m.TabPageModule)
  },
 
  {
    path: 'tab3',
    loadChildren: () => import('./tabs/tab3/tab3.module').then( m => m.Tab3PageModule)
  },
  {
    path: 'question',
    loadChildren: () => import('./question/question.module').then( m => m.QuestionPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'vagasculinaria',
    loadChildren: () => import('./vagasculinaria/vagasculinaria.module').then( m => m.VagasculinariaPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'inicioempresa',
    loadChildren: () => import('./inicioempresa/inicioempresa.module').then( m => m.InicioempresaPageModule)
  },

 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
