import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {
 GoogleMaps,
 GoogleMap,
 GoogleMapsEvent,
 LatLng,
 CameraPosition,
 MarkerOptions,
 Marker
} from '@ionic-native/google-maps';


/**
 * Generated class for the MapaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mapa',
  templateUrl: 'mapa.html',
})
export class MapaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private googleMaps: GoogleMaps) {
  }
    ngAfterViewInit() {
      this.loadMap();
    }

  loadMap() {
    let element: HTMLElement = document.getElementById('map');
    let map: GoogleMap = this.googleMaps.create(element);

    map.one(GoogleMapsEvent.MAP_READY).then(() => {
        console.log('Map is ready!');
        // Now you can add elements to the map like the marker
      let posicao: LatLng = new LatLng(-20.455609,-54.679512);

      let position: CameraPosition = {
      target: posicao,
      zoom: 15,
      tilt: 30
      };

     map.moveCamera(position);
     });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapaPage');
  }

}
