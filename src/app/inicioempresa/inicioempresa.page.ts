import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-inicioempresa',
  templateUrl: './inicioempresa.page.html',
  styleUrls: ['./inicioempresa.page.scss'],
})
export class InicioempresaPage implements OnInit {

  constructor(public menuController: MenuController) { }
  empresaData = JSON.parse(localStorage.getItem("user"));
  empresa:string
  
  ngOnInit() {
    this.empresa = this.empresaData.displayName
  }
  
  ionViewWillEnter(){
    this.menuController.enable(true);
  }
}
