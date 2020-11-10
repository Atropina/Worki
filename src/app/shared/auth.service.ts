import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { AngularFireAuth} from '@angular/fire/auth'
import { Router} from '@angular/router'
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( public ngFireAuth : AngularFireAuth, private router : Router, private ngFirestore : AngularFirestore) { 
    this.ngFireAuth.authState.subscribe(
      user => {
        if(user){
          localStorage.setItem("user" , JSON.stringify(user));
          //if (JSON.parse(localStorage.getItem("user")).emailVerified) {
            if (JSON.parse(localStorage.getItem("user")).nivel == 1) {
              this.router.navigate(["inicio"])
            } else {
              this.router.navigate(["inicioempresa"])
            }
            
          //} else {
           // user.sendEmailVerification()
            //this.router.navigate(["verifica-email"])
          //}
        }else{
          localStorage.setItem("user", null);
        }
      }
    )
  }

 

  SignIn(email, password){
    return this.ngFireAuth.signInWithEmailAndPassword(email, password);
  }

  SignOut(){
    return this.ngFireAuth.signOut().then( () =>{
      localStorage.clear()
    })
  }

  createUser(email, senha, userData, nome, tipo){
    console.log(nome)
    this.ngFireAuth.createUserWithEmailAndPassword(email, senha).then( (res)=>{
    
      res.user.updateProfile({
        displayName: nome
      })
      this.saveUserData(res.user.uid, userData, tipo)
    }).catch( (err) =>{
      console.log(err)
    })
  }

  saveUserData(uid, userData, tipo){
    const userRef: AngularFirestoreDocument<any> = this.ngFirestore.doc(tipo+'/' + uid);
    return userRef.set(userData, {merge:true}).then( (res)=>{
      console.log(res)
    }).catch((err)=>{
      console.log(err)
    })
  }
}

