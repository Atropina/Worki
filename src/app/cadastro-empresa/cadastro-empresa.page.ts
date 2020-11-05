import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-empresa',
  templateUrl: './cadastro-empresa.page.html',
  styleUrls: ['./cadastro-empresa.page.scss'],
})
export class CadastroEmpresaPage implements OnInit {

  data = {
    password: '',
    password_confirm: '',
  };
  areas = ['Administração', 'Culinaria', 'TI', 'Desenvolvimento de jogos']
  constructor() { }

  ngOnInit() {
  }

}
