import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class VagaService {

  constructor(
    private ngFirestore: AngularFirestore
  ) { }


  addVaga(data) {
    const vagaRef = this.ngFirestore.collection('vagas/');
    return vagaRef.add(data).then((res) => {
      console.log(res)
    }).catch((err) => {
      console.log(err)
    })
  }
}
