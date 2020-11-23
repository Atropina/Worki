import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { VagaService } from '.././shared/services/vaga/vaga.service'
import { EmpresaService } from '.././shared/services/empresa/empresa.service'
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Vagas } from '../shared/interfaces/Vagas';


@Component({
  selector: 'app-info-vagas',
  templateUrl: './info-vagas.page.html',
  styleUrls: ['./info-vagas.page.scss'],
})
export class InfoVagasPage implements OnInit {
  vagaID:string;
  empresaID:string
  vagaSub: Subscription
  empresaData = {}
  vagaData = {}
  constructor(
    public menuController: MenuController,
    private vagaService: VagaService,
    private actvRout: ActivatedRoute,
    private empresaService : EmpresaService
  ) {
    actvRout.queryParams.subscribe(( q:any) =>{
      this.vagaID = q['id']
      this.empresaID = q['empresaid']
      this.loadVaga(this.vagaID, this.empresaID)
    })
    
  }

  ngOnInit() {
    console.log(this.vagaData )
  }
  
   loadVaga(id:string, empresaid:string ) {
     
    console.log(empresaid)
    this.vagaService.getVagasDetails(id).then( res =>{
      this.vagaData = res.data()
    })

    this.empresaService.getEmpresa(empresaid).then( resE =>{
      
      this.empresaData = resE.data()
      console.log(this.empresaData)
    })
    

  }

  ionViewWillEnter() {
    this.menuController.enable(false);
  }
}
