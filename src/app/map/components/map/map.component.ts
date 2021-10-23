import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MapService } from '../../services/map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {

  @ViewChild('map') mapRef!: any;
  
  constructor(private mapService: MapService){}
  
  ngAfterViewInit(): void {
    this.mapService.initMap(this.mapRef.nativeElement);
  }
  
}
