import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'candidato',
  templateUrl: './card-candidato.component.html',
  styleUrls: ['./card-candidato.component.scss'],
})
export class CardCandidatoComponent implements OnInit {

  @Input() nome : string
  constructor() { }

  ngOnInit() {}

}
