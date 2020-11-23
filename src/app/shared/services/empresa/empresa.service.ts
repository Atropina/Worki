import { Injectable } from '@angular/core';
import { firestore } from 'firebase';
@Injectable({
  providedIn: 'root'
})
export class EmpresaService {
  db = firestore()
  constructor() { 

   }

   getEmpresa(id: string){
     return this.db.collection("user").doc(id).get()
   }
}
