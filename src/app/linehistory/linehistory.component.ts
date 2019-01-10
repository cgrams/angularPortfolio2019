import { Component, HostListener, OnInit, ElementRef } from '@angular/core';
import { trigger, state, style, transition, animate} from '@angular/animations'

@Component({
  selector: 'app-linehistory',
  templateUrl: './linehistory.component.html',
  styleUrls: ['./linehistory.component.css', './linehistoryMobile.css'],
  animations: [
		trigger( 'fadeCurtain', [
				transition('hidden <=> shown', animate('1800ms ease-in')),

				state('hidden', style({   transform: 'translateX(0%)' })),
				state('shown', style({   transform: 'translateX(100%)'  }))
			]),
  ]
})
export class LinehistoryComponent implements OnInit {

	yearsList: any = { 
	   firstYear:"One Year", 
	   secondYear:"Two Years" ,
	   thirdYear: "Three Years"
	};
 
state:string = 'hidden';

thankYouState: string = "showThankYouFalse";

ngOnInit(){}

constructor(public el: ElementRef) { }

  @HostListener('window:scroll', ['$event'])
    checkScroll() {
      const componentPosition = this.el.nativeElement.offsetTop
      const scrollPosition = window.pageYOffset + 500

      if (scrollPosition >= componentPosition) {
        this.state = 'shown'
      } else {
        this.state = 'hidden'
      }

    }
}