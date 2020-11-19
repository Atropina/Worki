import { Component, OnInit } from '@angular/core';
import {AuthService} from '../shared/auth.service'
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  emailUser:string;
  constructor( private authService: AuthService, public menuController: MenuController) { }

  ngOnInit() {
    
  }
  ionViewWillEnter(){
    this.menuController.enable(true);
  }
}
