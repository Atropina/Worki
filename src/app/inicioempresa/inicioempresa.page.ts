import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicioempresa',
  templateUrl: './inicioempresa.page.html',
  styleUrls: ['./inicioempresa.page.scss'],
})
export class InicioempresaPage implements OnInit {

  constructor() { }
 // empresaData = JSON.parse(localStorage.getItem("user"));
  empresa:string
  
  ngOnInit() {
    this.empresa = 'a'
  }

}
