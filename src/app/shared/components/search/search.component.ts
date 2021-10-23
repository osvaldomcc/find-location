import { Component, ElementRef, ViewChild } from '@angular/core';
import { MapService } from '../../../map/services/map.service';
import { errors } from '../../http-errors/errors';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  @ViewChild('inputValue') inputVal! : ElementRef;
  isError: string = '';


  constructor(private mapService: MapService) { }

  searchIp(value: string){
    this.isError = '';
    const cleanValue = value.trim();
    if(cleanValue){
      this.mapService.getUserInputLocation(cleanValue).subscribe( () => {}, err => {
        if(errors.hasOwnProperty(err.status)){
          this.isError = errors[err.status];
        }
      });
    }
    this.inputVal.nativeElement.value = '';
  }

}
