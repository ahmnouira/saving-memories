import { Component } from '@angular/core';
import { Camera, CameraOptions } from "@ionic-native/camera/ngx"; 

const camera : Camera = new Camera();

const options : CameraOptions  = {

  quality: 100,
  correctOrientation: true,
  saveToPhotoAlbum: true,
  destinationType: camera.DestinationType.DATA_URL,
  encodingType: camera.EncodingType.JPEG,
  cameraDirection: camera.Direction.FRONT,
  sourceType: camera.PictureSourceType.CAMERA,
  mediaType: camera.MediaType.ALLMEDIA,
  targetHeight: 800,
  targetWidth: 480
} 

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  images : string [] = new Array();
  currentImage : string;

  // Optional parameters to pass to the swiper instance. See http://idangero.us/swiper/api/ for valid options.
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
  
  constructor(private camera : Camera) {}

  takePicture() : void {
    this.camera.getPicture(options).then((imageData : string) => {
      console.log('imageData:', imageData);
      this.currentImage = 'data:image/jpeg;base64,' + imageData;
      this.images.push(this.currentImage);
      let imagesUris = this.images.join(','); 
      console.log('imagesUris: ', imagesUris);
    }).catch((err) => console.log(err));

  }  

}
