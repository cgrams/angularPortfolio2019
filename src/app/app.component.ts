import { Component, HostListener, OnInit, ElementRef } from '@angular/core';

import { trigger, state, style, animate, transition, group } from '@angular/animations';
import { MatTooltipModule } from '@angular/material/tooltip';

import { Observable } from 'rxjs';

import { ScrollToModule } from 'ng2-scroll-to-el';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './side-nav.component.css', './mobile.css'],

  animations:[
		trigger('fadeInSlow', [
				transition( 'void => *', [ style({ opacity: 0.0 }), animate('1000ms ease-in') ] )
			]),
		trigger( 'fadeInFast', [
				transition('void => *', [ style({ opacity: 0.0 }), animate('800ms ease-in') ])
			]),
		trigger( 'fadeInMoveFast', [
				transition('void => *', [ style({ opacity: 0.0, padding: '35px' }), animate('2000ms ease-in') ])
			]),
		
		trigger('fadeBioScroll', [
	      state('hidden', style({
			opacity: 0.0,
			marginTop: '40px'
	      })),
	      state('shown',   style({
	        opacity: 1.0,
			marginTop: '0px'
	      })),
	      transition('hidden => shown', animate('1400ms ease-in')),
	      transition('shown => hidden', animate('1000ms ease-out'))
	    ]),



	  ]
})
export class AppComponent  {
  title = 'Portfolio';
  state: string = 'small';

  events: string[] = [];
  opened: boolean;


stateBio:string = 'hidden';

changePicProfile: string = "./assets/upMiddleDown/upBW.jpg";

constructor(public el: ElementRef) { }

  @HostListener('window:scroll', ['$event'])
    checkScroll() {
      const componentPosition = this.el.nativeElement.offsetTop
      const scrollPosition = window.pageYOffset - 500

      const scrollPosition2 = window.pageYOffset - 380
      const scrollPosition3 = window.pageYOffset - 640
      const scrollPosition4 = window.pageYOffset - 860

      if (scrollPosition >= componentPosition) {
        this.stateBio = 'shown';
      } else {
        this.stateBio = 'hidden';
      }


      if ((scrollPosition2 >= componentPosition) && (componentPosition > scrollPosition3) ){
        this.changePicProfile = "./assets/upMiddleDown/upBW.jpg";
      }

      if((scrollPosition3 >= componentPosition) && (componentPosition > scrollPosition4)){
        this.changePicProfile = "./assets/upMiddleDown/middleBW.jpg";
      }

      if(scrollPosition4 >= componentPosition){
      	this.changePicProfile = "./assets/upMiddleDown/downBW.jpg";
      }

    }

  
}
 


 