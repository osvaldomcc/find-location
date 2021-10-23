import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements AfterViewInit {

  @ViewChild('hide') divRef!: ElementRef;
  show: boolean = true;
  tOne: any;
  tTwo: any;

  constructor() { }

  ngAfterViewInit(): void {
    this.tOne = setTimeout(()=>{
      this.divRef.nativeElement.style.animation = "fadeOut 1s";
    },4000);
    this.tTwo = setTimeout(()=>{
      this.show = false;
    },5000)
  }

  closeAlert(){
    clearTimeout(this.tOne);
    clearTimeout(this.tOne);
    this.divRef.nativeElement.style.animation = "fadeOut 1s";
    setTimeout(()=>{
      this.show = false;
    },1200)
  }

}
