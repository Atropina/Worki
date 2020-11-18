import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { from } from 'rxjs';
import { Vagas } from '../shared/interfaces/Vagas';
import { VagaService } from '../shared/services/vaga/vaga.service'

@Component({
  selector: 'app-publica-vaga',
  templateUrl: './publica-vaga.page.html',
  styleUrls: ['./publica-vaga.page.scss'],
})
export class PublicaVagaPage implements OnInit {
  private cidade: string;
  private rua: string;
  private uf: string


  constructor(
    private vagaService: VagaService,
    public loadingController: LoadingController,
    private alert: AlertController,
  ) { }
  empresaData = JSON.parse(localStorage.getItem("user"));
  private empresa: string
  private empresaUid: string


  ngOnInit() {
    this.empresa = this.empresaData.displayName
    this.empresaUid = this.empresaData.uid
  }
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
  async autoCep(cep) {
    console.log(cep.value)
    const res = await fetch("https://viacep.com.br/ws/" + cep.value + "/json/");
    const endereco = await res.json();
    this.cidade = endereco.localidade;
    this.rua = endereco.logradouro;
    this.uf = endereco.uf
  }
  async submitForm(formData) {
    this.presentLoading()
    const data: Vagas = {
      nomeVaga: formData.value.nomevaga,
      area: formData.value.atuacao,
      descricao: formData.value.descricao,
      requisitos: formData.value.requisitos,
      cep: formData.value.cep,
      salario: formData.value.salario,
      endereco: this.rua,
      complemento: formData.value.complemento,
      empresa: this.empresa,
      uid: this.empresaUid,
    }

    if (this.vagaService.addVaga(data)) {
      this.loadingController.dismiss()
      const alertError = await this.alert.create({
        header: "Sucesso",
        message: "Vaga cadastrada com sucesso!😁",
        buttons: [
          {
            text: "Ok",
            role: 'cancel',
            cssClass: 'myClassAlert'
          }
        ]

      })
      await alertError.present()
    } else {
      this.loadingController.dismiss()
      const alertError = await this.alert.create({

        header: "Erro",
        message: "Erro ao cadastrar sua vaga, tente novamente mais tarde  😶",
        buttons: [
          {
            text: "Ok",
            role: 'cancel',
            cssClass: 'myClassAlert'
          }
        ]

      })
      await alertError.present()
    }
  }

}
