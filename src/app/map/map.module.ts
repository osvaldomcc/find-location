import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationComponent } from './components/location/location.component';
import { MapComponent } from './components/map/map.component';



@NgModule({
  declarations: [
    LocationComponent,
    MapComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    LocationComponent,
    MapComponent
  ]
})
export class MapModule { }
