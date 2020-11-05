import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { AuthService} from '../shared/auth.service'
import { AngularFireAuth } from '@angular/fire/auth'

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  nomeUsuario = JSON.parse(localStorage.getItem('user')).displayName
  userID = JSON.parse(localStorage.getItem('user')).uid;
  teste = JSON.parse(localStorage.getItem('user')).emailVerified;
  
  constructor( private auth : AngularFireAuth) { }

  
  
  
  ngOnInit() {
    console.log(this.teste)
  }

}
