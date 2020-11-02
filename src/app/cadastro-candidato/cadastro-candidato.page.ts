import { Component, OnInit } from '@angular/core';
import { copyFile } from 'fs';
import { Candidatos } from '.././shared/interfaces/Candidato'
import { AuthService } from '../shared/auth.service'

@Component({
  selector: 'app-cadastro-candidato',
  templateUrl: './cadastro-candidato.page.html',
  styleUrls: ['./cadastro-candidato.page.scss'],
})
export class CadastroCandidatoPage implements OnInit {

  constructor( private auth : AuthService ) { }

  ngOnInit() {
  }

  validaForm(nome, cpf, email, nascimento, celular, pcd, empregado, cep, uf, cidade, endereco, numero, senha){
    console.log("chamou")
    const dados : Candidatos = {
      nome: nome.value,
      cpf:cpf.value,
      email: email.value,
      nascimento: nascimento.value,
      celular: celular.value,
      pcd: pcd.value,
      empregado: empregado.value,
      cep: cep.value,
      estado: uf.value,
      cidade:cidade.value,
      endereco: endereco.value,
      numero: numero.value,
      senha: senha.value,
      createdat: Date().toString(),
      nivel: 1
    }
    console.log(senha)
    this.auth.createUser(dados.email, dados.senha, dados);
    
  }
}
