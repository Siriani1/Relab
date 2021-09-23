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

  
  constructor()
  {
    this.center={lat: 45.506738, lng: 9.190766};
    this.position = this.center;
    this.label = "Tu";
    this.circleOption = {fillColor : 'red'}

    this.center_punto={lat:45.8754875,lng:9.73647363}
    this.position_punto = this.center_punto
    this.circleOption_punto = {fillColor : 'blue'}
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


  

}