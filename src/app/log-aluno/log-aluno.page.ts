import { Component, OnInit } from '@angular/core';
import { auth } from 'firebase';
import {AuthService} from '../shared/auth.service'
@Component({
  selector: 'app-log-aluno',
  templateUrl: './log-aluno.page.html',
  styleUrls: ['./log-aluno.page.scss'],
})
export class LogAlunoPage implements OnInit {

  constructor( private auth : AuthService) { }

  ngOnInit() {
  }

  logIn(email, password){
    this.auth.SignIn(email.value, password.value).then( (res)=>{
      console.log(res)
    }).catch( (err) =>{
      console.log(err)
    })
  }
}
