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
          this.router.navigate(["inicio"])
        }else{
          localStorage.setItem("user", null);
        }
      }
    )
  }

  get userName():string {
    const user = JSON.parse(localStorage.getItem("user"))
    console.log(user)
    return user.name
  }

  SignIn(email, password){
    return this.ngFireAuth.signInWithEmailAndPassword(email, password);
  }

  SignOut(){
    return this.ngFireAuth.signOut().then( () =>{
      localStorage.clear()
    })
  }

  createUser(email, senha, userData){
    this.ngFireAuth.createUserWithEmailAndPassword(email, senha).then( (res)=>{
      
      this.saveUserData(res.user.uid, userData)
    }).catch( (err) =>{
      console.log(err)
    })
  }

  saveUserData(uid, userData){
    const userRef: AngularFirestoreDocument<any> = this.ngFirestore.doc('candidatos/' + uid);
    return userRef.set(userData, {merge:true})
  }
}

