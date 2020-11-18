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

  private userData: any
  private db = firestore();
  private userCollection = this.db.collection('user')
  constructor(
    private ngDatabase: AngularFireDatabase,
    public ngFireAuth: AngularFireAuth,
    private router: Router,
    private ngFirestore: AngularFirestore) {
   this.ngFireAuth.authState.subscribe(
      user => {
        if (user) {
          localStorage.setItem('user', JSON.stringify(user))



          if (JSON.parse(localStorage.getItem("user")).emailVerified) {
            if (this.verificaTipo(JSON.parse(localStorage.getItem("user")).email) == "empresa") {
             console.log(this.verificaTipo(JSON.parse(localStorage.getItem("user")).email))
              this.router.navigate(["inicioemresa"])
            } else {
              this.router.navigate(["inicioempresa"])
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


  verificaTipo (email) {
    let data
    this.userCollection.where("email", "==", email).get().then(snapshot => {
      if (snapshot.empty) {
        console.log('No matching documents.');
        return;
      }

      snapshot.forEach(doc => {
        this.userData = doc.data();

      });
      data = this.userData.tipo
      
    })
    return data
    





  }


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

