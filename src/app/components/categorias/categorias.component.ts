import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss'],
})
export class CategoriasComponent implements OnInit {
  imgURL
  @Input() categoria : string
  constructor() { }


  ngOnInit() {
    this.imgURL = "../../assets/img/" + this.categoria + ".png"
  }

}
