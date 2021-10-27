import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Icon, Map, Marker, TileLayer } from 'leaflet'
import { BehaviorSubject, Observable, Subject } from 'rxjs';
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
  private _userLocation: BehaviorSubject<IpGeo> = new BehaviorSubject({});
  readonly userLocation: Observable<IpGeo> = this._userLocation.asObservable();

  constructor(private http: HttpClient) { }

  //Inicializa el mapa
  initMap(mapRef: HTMLElement) : void{
    this._map = new Map(mapRef, {zoomControl: false});
    this._userLocation.subscribe( ({ latitude, longitude }) =>{
      const lat: number = Number(latitude);
      const lng: number = Number(longitude);
      this._map.setView([lat, lng], 13);
    } );
    //Añade un nuevo marcador
    this.addNewMarker();
    this._tileLayer = new TileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this._map);        
  }

  //Obtiene la Locación del Ip del Usuario
  getUserLocation() : Observable<IpGeo> {
    const url = `${this._baseUrl}?apiKey=${this._apiKey}`;
    return this.http.get<IpGeo>(url).pipe(
      tap( location => this._userLocation.next(location) )
    );
  }

  //Obtiene la Locación del Ip o Dominio introducido por el Usuario
  getUserInputLocation(value: string): Observable<IpGeo>{
    const url = `${this._baseUrl}?apiKey=${this._apiKey}&ip=${value}`;
    return this.http.get<IpGeo>(url).pipe(
      tap( location => {
        this._userLocation.next(location)
        this._map.removeLayer(this._marker);
        //Añade un nuevo marcador al Mapa
        this.addNewMarker();
      } ),
    );
  }

  //Añade un nuevo marcador al mapa
  addNewMarker(){
    this._userLocation.subscribe( ({ latitude, longitude}) => {
      const lat: number = Number(latitude);
      const lng: number = Number(longitude);
      this._marker = new Marker([lat,lng]).setIcon(new Icon({
        iconUrl: 'assets/visual/icon-location.svg',
      })).addTo(this._map);
    } )
  }

}
