import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-esqueciasenha',
  templateUrl: './esqueciasenha.page.html',
  styleUrls: ['./esqueciasenha.page.scss'],
})
export class EsqueciasenhaPage implements OnInit {

  constructor(public menuController: MenuController) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.menuController.enable(false);
  }
  
}
