import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';



@Component({
  selector: 'app-verifica-email',
  templateUrl: './verifica-email.page.html',
  styleUrls: ['./verifica-email.page.scss'],
})
export class VerificaEmailPage implements OnInit {
  private email:any
  constructor( private ngAuth : AngularFireAuth) { }

  ngOnInit() {
    this.email = JSON.parse(localStorage.getItem("user")).email
  }

}
