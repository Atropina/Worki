import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { AngularFireAuth} from '@angular/fire/auth'
import { Router} from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( public ngFireAuth : AngularFireAuth, private router : Router ) { 
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

  get emailUser():string {
    const user = JSON.parse(localStorage.getItem("user"))
    return user.email
  }
  SignIn(email, password){
    return this.ngFireAuth.signInWithEmailAndPassword(email, password);
  }

  SignOut(){
    return this.ngFireAuth.signOut().then( () =>{
      localStorage.clear()
    })
  }
}
