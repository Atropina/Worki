import { Component, Input, OnInit } from '@angular/core';
import { from, Subscription } from 'rxjs';
import { AuthService} from '../shared/auth.service'
import { AngularFireAuth } from '@angular/fire/auth'
import { VagaService } from '../shared/services/vaga/vaga.service'
import { Vagas } from '../shared/interfaces/Vagas';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  private vagas 
  imgURI
  @Input() area : string
  private VagasSub : Subscription
  nomeUsuario = JSON.parse(localStorage.getItem('user')).displayName
  userID = JSON.parse(localStorage.getItem('user')).uid;
  teste = JSON.parse(localStorage.getItem('user')).emailVerified;
  areas = ["Administração", "Gestão de pessoas", "TI", "Gastronomia", "Saúde", "RH", "Manutenção", "Eletrecista", "Educação",
          "Jurídico", "Imobilíario", "Contabéis", "Cuidado com animais", "Seguraça", "Vendas", "Construção"," Limpeza",
          "Manufatura", "Artesanato", "Arquitetura", "Design", "Cobranças", "Marketing" , "Jornalismo" ,""]

  constructor( 
    private auth : AngularFireAuth,
    private vagaService : VagaService,
    public menuController: MenuController
    ) {
      this.VagasSub = this.vagaService.getVagas().subscribe( data =>{
        this.vagas = data
      })
     }

  
  
  
  ngOnInit() {
    
    console.log(this.vagas)
    this.imgURI = "../../assets/img/" + this.area + ".png"
  }
  

  ngOnDestroy(){
    this.VagasSub.unsubscribe()
  }
  ionViewWillEnter(){
    this.menuController.enable(true);
  }
}
