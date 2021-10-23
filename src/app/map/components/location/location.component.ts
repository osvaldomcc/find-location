import { AfterContentChecked, Component } from '@angular/core';
import { MapService } from '../../services/map.service';
import { IpGeo } from '../../interfaces/ipgeo.interface';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements AfterContentChecked {

    ipAddress!: IpGeo;
    isLoading: boolean = true;

    constructor(private mapService: MapService) { }
  
    ngAfterContentChecked(): void {
      this.mapService.userLocation.subscribe( desc => {
        this.ipAddress = desc
      });
    }
}
