import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Vagas} from '../shared/interfaces/Vagas';
import { VagaService } from '../shared/services/vaga/vaga.service'

@Component({
  selector: 'app-publica-vaga',
  templateUrl: './publica-vaga.page.html',
  styleUrls: ['./publica-vaga.page.scss'],
})
export class PublicaVagaPage implements OnInit {
  private cidade:string;
  private rua:string;
  private uf:string


  constructor(
    private vagaService : VagaService
  ) { }
  empresaData = JSON.parse(localStorage.getItem("user"));
  private empresa:string
  private empresaUid:string

  
  ngOnInit() {
    this.empresa = this.empresaData.displayName
    this.empresaUid = this.empresaData.uid
  }

  async autoCep(cep){
    console.log(cep.value)
    const res = await fetch("https://viacep.com.br/ws/"+cep.value+ "/json/");
    const endereco = await res.json();
    this.cidade = endereco.localidade;
    this.rua = endereco.logradouro;
    this.uf = endereco.uf
  }
  submitForm(formData){
    const data : Vagas = {
      nomeVaga: formData.value.nomevaga,
      area: formData.value.atuacao,
      descricao: formData.value.descricao,
      requisitos: formData.value.requisistos,
      cep: formData.value.cep,
      salario: formData.value.salario,
      endereco: this.rua,
      complemento: formData.value.complemento,
      empresa: this.empresa,
      uid: this.empresaUid,
    }

    this.vagaService.addVaga(data)
  }

}
