import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Vagas } from '../../interfaces/Vagas'
import { map } from 'rxjs/operators';
import { firestore } from 'firebase';
@Injectable({
  providedIn: 'root'
})
export class VagaService {
  private vagaCollection : AngularFirestoreCollection<Vagas>
  private db = firestore()
  constructor(
    public ngFirestore: AngularFirestore
  ) { 
     this.vagaCollection = this.ngFirestore.collection<Vagas>("vagas")
  }
  
  

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
    
    return this.db.collection("vagas").doc(id).get()
    
  }
}
