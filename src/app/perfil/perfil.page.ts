import { Component, OnInit } from '@angular/core';
import {AuthService} from '../shared/auth.service'

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  emailUser:string;
  constructor( private authService: AuthService) { }

  ngOnInit() {
    this.emailUser = this.authService.emailUser;
    console.log(this.emailUser)
  }

}
