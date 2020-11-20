import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Platform } from '@ionic/angular';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';


@Component({
  selector: 'app-foto-perfil',
  templateUrl: './foto-perfil.page.html',
  styleUrls: ['./foto-perfil.page.scss'],
})
export class FotoPerfilPage implements OnInit {
  public uploadPercent: Observable<number>;
  public downloadUrl: Observable<string>;

  constructor(private  camera: Camera, private platform: Platform, private file: File,private afStorage: AngularFirestore) { }

  ngOnInit() {}

  async openGalery(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      correctOrientation: true
    };

    try{
        const fileUrl: string = await this.camera.getPicture(options);
        
        let file: string;
        if(this.platform.is("android")){
          file = fileUrl.split('/').pop();
        } else {
          file = fileUrl.substring(fileUrl.lastIndexOf('/') + 1, fileUrl.indexOf('?'));
        }
        
        const path: string = fileUrl.substring(0, fileUrl.lastIndexOf('/'));

        const buffer: ArrayBuffer = await this.file.readAsArrayBuffer(path,file);
        const blob: Blob = new Blob([buffer], {type: 'image/jpeg'});

    }catch(error){
      console.error(error);
    }

  }

  uploadPicture(blob: Blob){
    const ref = this.afStorage.ref('ionic.jpg');
    const task = ref.put(blob);

    this.uploadPercent = task.percentageChanges(); 
    
    task.snapshotChanges().pipe (
      finalize(() => this.downloadUrl = ref.getDownloadURL())
    )
    .subscribe();
  }

}
