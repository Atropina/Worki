import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { VagaService } from '.././shared/services/vaga/vaga.service'
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-info-vagas',
  templateUrl: './info-vagas.page.html',
  styleUrls: ['./info-vagas.page.scss'],
})
export class InfoVagasPage implements OnInit {
  vagaID
  private vagatSubscription: Subscription;
  constructor(
    public menuController: MenuController,
    private vagaService: VagaService,
    private actvRout: ActivatedRoute
  ) {
    this.vagaID = this.actvRout.snapshot.params['id'];
    console.log(this.vagaID)
    if(this.vagaID){
      this.loadVaga()
    } 
  }

  ngOnInit() {

  }

  loadVaga(){
    this.vagatSubscription = this.vagaService.getVagasDetails(this.vagaID).subscribe( data =>{
      console.log(data)
    })
  }

  ionViewWillEnter() {
    this.menuController.enable(false);
  }
}
