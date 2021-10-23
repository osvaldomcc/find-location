import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Icon, Map, Marker, TileLayer } from 'leaflet'
import { Observable, of } from 'rxjs';
import { environment } from '../../../environments/environment';
import { IpGeo } from '../interfaces/ipgeo.interface';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  private _map!: Map;
  private _tileLayer!: TileLayer;
  private _marker!: Marker;
  private _apiKey: string = environment.IP_GEO;
  private _baseUrl: string = environment.IP_GEO_BASE_URL;
  private _userLocation!: IpGeo;

  constructor(private http: HttpClient) { }

  get userLocation() : Observable<IpGeo>{
    return of(this._userLocation);
  }

  //Inicializa el mapa
  initMap(mapRef: HTMLElement) : void{
    const lat: number = Number(this._userLocation.latitude);
    const lng: number = Number(this._userLocation.longitude);
    this._map = new Map(mapRef, {zoomControl: false});
    this._map.setView([lat, lng], 13);
    this._tileLayer = new TileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(this._map);
    this._marker = new Marker([lat,lng]).setIcon(new Icon({
      iconUrl: 'assets/visual/icon-location.svg',
    })).addTo(this._map);
  }

  //Obtiene la Locación del Ip del Usuario
  getUserLocation() : Observable<IpGeo> {
    const url = `${this._baseUrl}?apiKey=${this._apiKey}`;
    return this.http.get<IpGeo>(url).pipe(
      tap( location => this._userLocation = location )
    );
  }

  //Obtiene la Locación del Ip o Dominio introducido por el Usuario
  getUserInputLocation(value: string): Observable<IpGeo>{
    const url = `${this._baseUrl}?apiKey=${this._apiKey}&ip=${value}`;
    return this.http.get<IpGeo>(url).pipe(
      tap( location => {
        this._userLocation = location;
        const latitud: number = Number(location.latitude);
        const longitud: number = Number(location.longitude);
        this._map.setView([latitud, longitud], 13);
        this._map.removeLayer(this._marker);
        this._marker = new Marker([latitud,longitud]).setIcon(new Icon({
          iconUrl: 'assets/visual/icon-location.svg',
        })).addTo(this._map);
      } ),
    );
  }
 
}
