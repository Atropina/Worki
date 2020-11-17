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
    const vagaRef: AngularFirestoreDocument<any> = this.ngFirestore.doc('vagas/');
    return vagaRef.set(data, { merge: true }).then((res) => {
      console.log(res)
    }).catch((err) => {
      console.log(err)
    })
  }
}
