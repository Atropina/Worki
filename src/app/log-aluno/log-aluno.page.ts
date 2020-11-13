import { Component, OnInit } from '@angular/core';
import { auth } from 'firebase';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router'
import {AuthService} from '../shared/auth.service'
import { AlertController, ModalController  } from '@ionic/angular'

@Component({
  selector: 'app-log-aluno',
  templateUrl: './log-aluno.page.html',
  styleUrls: ['./log-aluno.page.scss'],
})
export class LogAlunoPage implements OnInit {

  constructor( private auth : AuthService, private router : Router, private alert : AlertController, private modalCtrl : ModalController, public menuController: MenuController) { }

  ngOnInit() {
  }

    async modalSenha(){
      const modal = await this.modalCtrl.create({
        component: 'app-esqueci-senha'
      })
      return await modal.present()
    }
    logIn(email, password){
    this.auth.SignIn(email.value, password.value).then( (res)=>{
      
    }).catch( async (err) =>{
      let msg:string;
     

      switch (err.code) {
        case "auth/invalid-email":
          msg = "E-mail incorreto. 😩"
        
        break;
        case "auth/user-not-found":
          msg = "E-mail não cadastrado em nosso banco de dados. 😶"

        break;
        case "auth/wrong-password":
          msg = "Senha incorreta. 🤨"
      
        default:
          msg = "Erro ao fazer o Login.🤔"
          break;
        }
        const alertError = await this.alert.create({
          header: "Erro",
          message: msg,
          buttons: [
            {
              text: "Ok",
              role: 'cancel',
              cssClass: 'secondary'
            }
          ]

        })
        await alertError.present()
     



    })
  }
  ionViewWillEnter(){
    this.menuController.enable(false);
  }
}
