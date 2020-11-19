import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AlertController, LoadingController, ModalController } from '@ionic/angular';

@Component({
  selector: 'modalSenha',
  templateUrl: './esqueci-senha.component.html',
  styleUrls: ['./esqueci-senha.component.scss'],
})
export class EsqueciSenhaComponent implements OnInit {
  
  constructor(
    private ngFireAuth: AngularFireAuth,
    private alert: AlertController,
    public loadingController: LoadingController,
    private modalCrtl : ModalController
  ) { }

  ngOnInit() { }


  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Carregando',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }


   resetPassword(email) {
     this.presentLoading()
    this.ngFireAuth.sendPasswordResetEmail(email).then(async res => {
      this.loadingController.dismiss()
      const alertError = await this.alert.create({
        header: "Pronto",
        message: "Um e-mail de redifinição de senha foi enviada para você",
        buttons: [
          {
            text: "Ok",
            role: 'cancel',
            cssClass: 'myClassAlert'
          }
        ]

      })
      await alertError.present()
    }).catch(async err =>{
      this.loadingController.dismiss()
      console.log(err.code)
      let msg
      switch (err.code) {
        case "auth/user-not-found":
          msg = "Opa, esse e-mail não consta em nosso banco de dados. 🤔"
          break;
        case "auth/invalid-email":
          msg = "Opa, parece que você digitou um formato de e-mail inválido 🤔"
          break;
      
        default:
          break;
      }
      const alertError = await this.alert.create({
        header: "Erro",
        message: msg,
        buttons: [
          {
            text: "Ok",
            role: 'cancel',
            cssClass: 'myClassAlert'
          }
        ]

      })
      
      await alertError.present()
    })
  }

  fechaModal(){
    this.modalCrtl.dismiss()
  }

}
