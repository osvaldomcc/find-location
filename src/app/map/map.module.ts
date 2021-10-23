import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LocationComponent } from './components/location/location.component';
import { MapComponent } from './components/map/map.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    LocationComponent,
    MapComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
  ],
  exports:[
    LocationComponent,
    MapComponent
  ]
})
export class MapModule { }
