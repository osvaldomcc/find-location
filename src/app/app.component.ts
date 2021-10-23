import { Component, OnInit } from '@angular/core';
import { MapService } from './map/services/map.service';
import { errors } from './shared/http-errors/errors';
import { IpGeo } from './map/interfaces/ipgeo.interface';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  isError: string = '';
  isLoading: boolean = true;

  constructor( private mapService: MapService){}

  ngOnInit(): void {    
    this.mapService.getUserLocation().subscribe(res => {
        this.isError = '';
        this.isLoading = true;
        if(res.ip){
          this.isError = '';
          this.isLoading = false;
        }
    }, err => {
      if(errors.hasOwnProperty(err.status)){
        this.isError = errors[err.status]
      }
    } );
  }

}
