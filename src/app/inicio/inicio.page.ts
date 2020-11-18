import { Component, OnInit } from '@angular/core';
import { from, Subscription } from 'rxjs';
import { AuthService} from '../shared/auth.service'
import { AngularFireAuth } from '@angular/fire/auth'
import { VagaService } from '../shared/services/vaga/vaga.service'
import { Vagas } from '../shared/interfaces/Vagas';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  private vagas = new Array<Vagas>();
  private VagasSub : Subscription
  nomeUsuario = JSON.parse(localStorage.getItem('user')).displayName
  userID = JSON.parse(localStorage.getItem('user')).uid;
  teste = JSON.parse(localStorage.getItem('user')).emailVerified;
  
  constructor( 
    private auth : AngularFireAuth,
    private vagaService : VagaService
    ) {
      this.VagasSub = vagaService.getVagas().subscribe( data =>{
        this.vagas = data
      })
     }

  
  
  
  ngOnInit() {
    
    
  }

  ngOnDestroy(){
    this.VagasSub.unsubscribe()
  }

}
