
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import {AuthService} from './shared/auth.service'
import { Router} from "@angular/router"
import '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})


export class AppComponent implements OnInit {
darkMode: any;

  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Home',
      url: '/inicio',
      icon: 'home',
    },

    {
      title: 'Perfil',
      url: '/perfil',
      icon: 'contact'
    }


  ];


  
  
  ref: any;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private auth : AuthService,
    private router : Router
  ) {

    this.initializeApp();
  }

  ngOnInit() {

    const osDarkness = window.matchMedia('(prefers-color-scheme: dark)');
    // check the initial state
    this.applyDarkness(osDarkness);
    // add listener
    osDarkness.addListener(e => {
      this.applyDarkness(e);
    });
  }
  
  applyDarkness(matchMediaEvent) {
    if (matchMediaEvent.matches) {
      //Tem que troar o false do toggle dps, depende do plano de cor do windows. Apenas dev
      this.darkMode = true;
      document.body.classList.toggle('dark', false);
    } else {
      this.darkMode = false;
      document.body.classList.toggle('dark', false);
    }
    // this is needed to update the ngModel of the ion-toggle
    // to avoid the toggle state to become backwards
    this.ref.detectChanges();
  }

  toggleDarkness() {
    // this.darkMode = !this.darkMode;
  
    console.log(this.darkMode)
    if (this.darkMode) {
      document.body.classList.toggle('dark', true);
    } else {
      document.body.classList.toggle('dark', false);
    }
  }






  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  logOut(){
    this.auth.SignOut().then( () =>{
      console.log("ok")
      this.router.navigate(['home'])

    }).catch( (err) =>{
      console.log(err)
    })
  }

}
