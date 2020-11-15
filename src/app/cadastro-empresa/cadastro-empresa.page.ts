import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { Empresa } from "../shared/interfaces/Empresa"
@Component({
  selector: 'app-cadastro-empresa',
  templateUrl: './cadastro-empresa.page.html',
  styleUrls: ['./cadastro-empresa.page.scss'],
})
export class CadastroEmpresaPage implements OnInit {
  cidade; rua; uf:string

  data = {
    password: '',
    password_confirm: '',
  };
  areas = ['Administração', 'Culinaria', 'TI', 'Desenvolvimento de jogos']
  constructor( private auth : AuthService) { }

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
  submitForm(form){ 
    
    const data : Empresa = {
      nomeempresa: form.value.nomeEmpresa,
      cnpj: form.value.cnpj,
      email: form.value.email,
      celular: form.value.celular,
      cep: form.value.cep,
      estado: this.uf,
      cidade: this.cidade,
      endereco: this.rua,
      numero: form.value.numero,
      complemento: form.value.complemento,
      area: form.value.area,
      tipo: "empresa"
    }
    
    this.auth.createUser(data.email, form.value.password, data, data.nomeempresa, "empresas")
  }

}
