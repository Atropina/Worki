import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [  
  {
    path: '',
    redirectTo: 'cadastro-empresa',
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
  {
    path: 'cadastro-candidato',
    loadChildren: () => import('./cadastro-candidato/cadastro-candidato.module').then( m => m.CadastroCandidatoPageModule)
  },
  {
    path: 'verifica-email',
    loadChildren: () => import('./verifica-email/verifica-email.module').then( m => m.VerificaEmailPageModule)
  },
  {
    path: 'cadastro-empresa',
    loadChildren: () => import('./cadastro-empresa/cadastro-empresa.module').then( m => m.CadastroEmpresaPageModule)
  },



 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
