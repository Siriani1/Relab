import { ThisReceiver } from '@angular/compiler';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'server mappe';
  //Aggiungiamo latitudine e longitudine di un luogo


  center : any;
  position : any;
  label :string;
  circleOption: { fillColor: string; };
  center_punto: { lat: number; lng: number; };
  position_punto: { lat: number; lng: number; };
  circleOption_punto: { fillColor: string; };
  center_punto2: { lat: number; lng: number; };
  position_punto2: { lat: number; lng: number; };
  circleOption_punto2: { fillColor: string; };
  center_punto3: { lat: number; lng: number; };
  position_punto3: { lat: number; lng: number; };
  circleOption_punto3: { fillColor: string; };

  markerOptions: google.maps.MarkerOptions;
  markerOption: google.maps.MarkerOptions;
  markerOptions2: google.maps.MarkerOptions;
  markerOptions3: google.maps.MarkerOptions;

  vertices: google.maps.LatLngLiteral[];
  vertices2: google.maps.LatLngLiteral[];

  rOption: {fillColor: string};
  
  constructor()
  {
    this.center={lat: 45.506738, lng: 9.190766};
    this.position = this.center;
    this.label = "Tu";
    this.circleOption = {fillColor : 'red'}

    this.center_punto={lat:45.5097718,lng:9.189956}
    this.position_punto = this.center_punto
    this.circleOption_punto = {fillColor : 'blue'}

    this.center_punto2 = {lat:45.5084981,lng:9.1915138}
    this.position_punto2 = this.center_punto2
    this.circleOption_punto2 = {fillColor : 'purple'}

    this.center_punto3 = {lat:45.5076113,lng:9.1933876}
    this.position_punto3 = this.center_punto3
    this.circleOption_punto3 = {fillColor : 'yellow'}

    this.rOption = {fillColor: 'green'}

    let iconData : google.maps.Icon = {
      url:'./assets/img/cat_acrobat.ico',
      scaledSize : new google.maps.Size(60,60)
    }
    
    let icon : google.maps.Icon = {
      url:'./assets/img/cow.png',
      scaledSize : new google.maps.Size(60,60)
    }

    let iconData2 : google.maps.Icon = {
      url:'./assets/img/owl.png',
      scaledSize : new google.maps.Size(60,60)
    }

    let iconData3 : google.maps.Icon = {
      url:'./assets/img/turtle.png',
      scaledSize : new google.maps.Size(60,60)
    }

    this.markerOptions = {icon:iconData}
    this.markerOption = {icon:icon}
    this.markerOptions2 = {icon:iconData2}
    this.markerOptions3 = {icon:iconData3}

    this.vertices = [
      {  lat: this.center.lat + 0.001, lng: this.center.lng - 0.002 },
      {  lat: this.center.lat, lng: this.center.lng },
      {  lat: this.center.lat - 0.001, lng: this.center.lng - 0.002}
    ];

    this.vertices2 = [
      { lat: this.center.lat + 0.001, lng: this.center.lng + 0.001 },
      { lat: this.center.lat - 0.001, lng: this.center.lng + 0.001 },
      { lat: this.center.lat - 0.001, lng: this.center.lng + 0.002 },
      { lat: this.center.lat + 0.001, lng: this.center.lng + 0.002 },
    ];


    
  }

  colore_giallo(){
    this.circleOption_punto = {fillColor : 'yellow'};
  }
  colore_rosso(){
    this.circleOption_punto = {fillColor : 'red'};
  }
  
  colore_viola(){
    this.circleOption_punto = {fillColor : 'purple'};
  }

  colore_RBlu(){
    this.rOption = {fillColor : 'blue'};
  }

  colore_RPink(){
    this.rOption = {fillColor : 'pink'};
  }

  colore_ROrange(){
    this.rOption = {fillColor : 'orange'};
  }


  

}