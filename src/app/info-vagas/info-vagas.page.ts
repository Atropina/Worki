import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-info-vagas',
  templateUrl: './info-vagas.page.html',
  styleUrls: ['./info-vagas.page.scss'],
})
export class InfoVagasPage implements OnInit {

  constructor(public menuController: MenuController) { }

  ngOnInit() {
  }
  ionViewWillEnter(){
    this.menuController.enable(false);
  }
}
