import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { AngularFireAuth} from '@angular/fire/auth'


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( public ngFireAuth : AngularFireAuth ) { }

  SignIn(email, password){
    return this.ngFireAuth.signInWithEmailAndPassword(email, password);
  }
}
