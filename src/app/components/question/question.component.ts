import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AlertController, LoadingController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnInit {
  
  constructor(
    private ngFireAuth: AngularFireAuth,
    private alert: AlertController,
    public loadingController: LoadingController,
    private modalCrtl : ModalController
  ) { }

  ngOnInit() {}

  fechaModal(){
    this.modalCrtl.dismiss()
  }

}


