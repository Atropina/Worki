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

  private userData
  private db = firestore();
  private userCollection = this.db.collection('user')
  dataUserA: firestore.DocumentData;
  constructor(
    private ngDatabase: AngularFireDatabase,
    public ngFireAuth: AngularFireAuth,
    private router: Router,
    private ngFirestore: AngularFirestore) {
    this.ngFireAuth.authState.subscribe(
      user => {
        if (user) {
          localStorage.setItem('user', JSON.stringify(user))
          let email = JSON.parse(localStorage.getItem("user")).email

          this.userCollection.where("email", "==", email).get().then(res => {
            res.forEach(doc => {
              this.dataUserA = doc.data()

            });
            localStorage.setItem('UserTipo', this.dataUserA.tipo)
          })

          if (JSON.parse(localStorage.getItem("user")).emailVerified) {

            if (localStorage.getItem('UserTipo') == "empresa") {

              this.router.navigate(["inicioempresa"])
            } else {
              this.router.navigate(["inicio"])
            }

          } else {
            user.sendEmailVerification()
            this.router.navigate(["verifica-email"])
          }

        } else {
          localStorage.setItem("user", null);
          console.log("sem usuario")
        }
      }
    )
  }

  SignIn(email, password) {
    return this.ngFireAuth.signInWithEmailAndPassword(email, password);
  }

  SignOut() {
    return this.ngFireAuth.signOut().then(() => {
      localStorage.removeItem('user')
      localStorage.removeItem('UserTipo')
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

