import { OnInit, Component } from '@angular/core';
import { MapService } from '../../services/map.service';
import { IpGeo } from '../../interfaces/ipgeo.interface';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

    ipAddress!: IpGeo;
    isLoading: boolean = true;

    constructor(private mapService: MapService) { }
  
    ngOnInit(): void {
      this.mapService.userLocation.subscribe( location => this.ipAddress = location );
    }
}
