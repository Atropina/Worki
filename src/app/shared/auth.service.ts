import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth'
import { AngularFireDatabase, snapshotChanges } from '@angular/fire/database'
import { Router } from '@angular/router'
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { map } from 'rxjs/operators'
import { firestore } from 'firebase';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userCollection = this.ngFirestore.collection('user')
  private db = this.ngFirestore;
  constructor(
    private ngDatabase: AngularFireDatabase,
    public ngFireAuth: AngularFireAuth,
    private router: Router,
    private ngFirestore: AngularFirestore) {
    this.ngFireAuth.authState.subscribe(
      user => {
        if (user) {
          localStorage.setItem('user', JSON.stringify(user))
          //this.verificaTipo(JSON.parse(localStorage.getItem("user")).email)
          
          //if (JSON.parse(localStorage.getItem("user")).emailVerified) {
            

          //} else {
            //user.sendEmailVerification()
            //this.router.navigate(["verifica-email"])
          //}
        } else {
          localStorage.setItem("user", null);
        }
      }
    )
  }

  // async verificaTipo(email) {
    
  //   await this.db.collection("user").where("uid", "==", email).get().then( (res) =>{
  //     res.forEach(doc =>{
  //       console.log(doc.id, "=>" , doc.data())
  //     } )
  //   }).catch( (err) =>[
  //     console.log(err)
  //   ])
    


   
  // }

  SignIn(email, password) {
    return this.ngFireAuth.signInWithEmailAndPassword(email, password);
  }

  SignOut() {
    return this.ngFireAuth.signOut().then(() => {
      localStorage.clear()
    })
  }

  createUser(email, senha, userData, nome, tipo) {
    console.log(nome)
    this.ngFireAuth.createUserWithEmailAndPassword(email, senha).then((res) => {

      res.user.updateProfile({
        displayName: nome
      })
      this.saveUserData(res.user.uid, userData)
    }).catch((err) => {
      console.log(err)
    })
  }

  saveUserData(uid, userData) {
    const userRef: AngularFirestoreDocument<any> = this.ngFirestore.doc('user/' + uid);
    return userRef.set(userData, { merge: true }).then((res) => {
      console.log(res)
    }).catch((err) => {
      console.log(err)
    })
  }
}

