import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

import { Candidatos } from '.././shared/interfaces/Candidato'
import { AuthService } from '../shared/auth.service'

@Component({
  selector: 'app-cadastro-candidato',
  templateUrl: './cadastro-candidato.page.html',
  styleUrls: ['./cadastro-candidato.page.scss'],
})
export class CadastroCandidatoPage implements OnInit {

  constructor( private auth : AuthService, private toast : ToastController) { }
   rua:any
   uf:any
   cidade:any

   senha:any;
   confirmaSenha:any
   data = {
    password: '',
    password_confirm: '',
  };
  ngOnInit() {
  }

  async autoCep(cep){
    console.log(cep.value)
    const res = await fetch("https://viacep.com.br/ws/"+cep.value+ "/json/");
    const endereco = await res.json();
    this.cidade = endereco.localidade;
    this.rua = endereco.logradouro;
    this.uf = endereco.uf
  }

    
  
  
  validaForm(nome, cpf, email, nascimento, celular, pcd, empregado, cep, numero, senha){
    
    const dados : Candidatos = {
      nome: nome.value,
      cpf:cpf.value,
      email: email.value,
      nascimento: nascimento.value,
      celular: celular.value,
      pcd: pcd.value,
      empregado: empregado.value,
      cep: cep.value,
      estado: this.uf,
      cidade: this.cidade,
      endereco: this.rua ,
      numero: numero.value,
      
      createdat: Date().toString(),
      tipo: "candidato"
    }
 
    this.auth.createUser(dados.email, senha.value, dados, dados.nome, "candidato");
    
  }
}
