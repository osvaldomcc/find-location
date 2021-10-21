import { Injectable } from '@angular/core';
import { Map, Marker, TileLayer } from 'leaflet'

@Injectable({
  providedIn: 'root'
})
export class MapService {

  map!: Map;
  tileLayer!: TileLayer;
  marker!: Marker;

  constructor() { }

  initMap() : void{
    this.map = new Map('map');
    this.map.setView([51.505, -0.09], 13);
    this.tileLayer = new TileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(this.map);
    this.marker = new Marker([51.5, -0.09]).addTo(this.map)
                  .bindPopup('Tu ubicación es Cuba')
                  .openPopup()
  }
  
}
