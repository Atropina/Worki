import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Vagas } from '../../interfaces/Vagas'
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class VagaService {

  constructor(
    public ngFirestore: AngularFirestore
  ) { }
  private vagaCollection = this.ngFirestore.collection<Vagas>("vagas")

  addVaga(data): boolean {
    let res
    this.vagaCollection.add(data).then(re => {
      res = true
    }).catch(err => {
      console.log(err)
      res = true
    })
    return res
  }

  getVagas() {
    return this.vagaCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data()
          const vagaId = a.payload.doc.id

          return { vagaId, ...data }
        })
      })
    )
  }

  getVagasDetails(id :string){
    
    return this.vagaCollection.doc<Vagas>(id).valueChanges();
    
  }
}
