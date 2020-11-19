import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [  
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./landing/home.module').then( m => m.HomePageModule)
  },

  {
    path: 'log-aluno',
    loadChildren: () => import('./loging/log-aluno.module').then( m => m.LogAlunoPageModule)
  },
  
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
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
  {
    path: 'publica-vaga',
    loadChildren: () => import('./publica-vaga/publica-vaga.module').then( m => m.PublicaVagaPageModule)
  },
  {
    path: 'esqueciasenha',
    loadChildren: () => import('./esqueciasenha/esqueciasenha.module').then( m => m.EsqueciasenhaPageModule)
  },  {
    path: 'info-vagas',
    loadChildren: () => import('./info-vagas/info-vagas.module').then( m => m.InfoVagasPageModule)
  },






 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
