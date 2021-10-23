import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './components/search/search.component';
import { CardComponent } from './components/card/card.component';
import { ErrorComponent } from './components/error/error.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { FancySpinnerComponent } from './components/fancy-spinner/fancy-spinner.component';
import { AlertComponent } from './components/alert/alert.component';



@NgModule({
  declarations: [
    AlertComponent,
    CardComponent,
    ErrorComponent,
    FancySpinnerComponent,
    SearchComponent,
    SpinnerComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AlertComponent,
    CardComponent,
    ErrorComponent,
    FancySpinnerComponent,
    SearchComponent,
    SpinnerComponent
  ]
})
export class SharedModule { }
