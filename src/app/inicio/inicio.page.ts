import { Component, OnInit } from '@angular/core';
import { AuthService} from '../shared/auth.service'
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  nomeUsuario:string
  constructor( private auth : AuthService) { }

  ngOnInit() {
    this.nomeUsuario = this.auth.userName
  }

}
