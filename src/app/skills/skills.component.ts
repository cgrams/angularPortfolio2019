import { Component, HostListener, OnInit, ElementRef } from '@angular/core';
import { trigger, state, style, transition, animate} from '@angular/animations';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css', './mobileSkills.css'],
  
  animations: [

	 trigger('fadeBackgroundFly', [
	      state('hidden', style({
			strokeWidth: '2'
	      })),
	      state('shown',   style({
	        strokeWidth: '0'
	      })),
	      transition('hidden => shown', animate('1000ms ease-in')),
	      transition('shown => hidden', animate('1000ms ease-out'))
	    ]),
	
	trigger('growGraph', [
	      state('smallLine', style({
			paddingRight: '12%'
	      })),
	      state('bigLine',   style({
	        paddingRight: '0px'
	      })),
	      transition('smallLine => bigLine', animate('1000ms ease-in')),
	      transition('bigLine => smallLine', animate('1000ms ease-out'))
	    ]),



	 ]

})
export class SkillsComponent implements OnInit {
	ngOnInit() {}

	development = [
		{ skill:'HTML5',
		  percentage: 90,
		  strength: 'Ninja'
		},
		{ skill: 'CSS3 + Animations',
		  percentage: 90,
		  strength: 'Ninja'
		},
		{ skill: 'jQuery',
		  percentage: 60,
		  strength: 'Mid'
		},
		{ skill: 'Angular 7',
		  percentage: 35,
		  strength: 'New'
		}
	];

	productivity = [
		{ skill:'Bootstrap',
		  percentage: 90,
		  strength: 'Ninja'
		},
		{ skill:'Chome Dev Tools',
		  percentage: 60,
		  strength: 'Mid'
		},		
		{ skill: 'Sublime IDE',
		  percentage: 50,
		  strength: 'Mid'
		},
		{ skill: 'Git',
		  percentage: 30,
		  strength: 'New'
		}
	];

	design = [
		{ skill:'SEO',
		  percentage: 60,
		  strength: 'Mid'
		},
		{ skill:'Google Material',
		  percentage: 60,
		  strength: 'Mid'
		},				
		{ skill: 'Photoshop',
		  percentage: 50,
		  strength: 'Mid'
		},
		{ skill: 'Blender 3d',
		  percentage: 30,
		  strength: 'New'
		}
	];	

state:string = 'hidden';
stateLine: string = "smallLine";
stateLine2: string = "smallLine";
stateLine3: string = "smallLine"

constructor(public el: ElementRef) { }

  @HostListener('window:scroll', ['$event'])
    checkScroll() {
      const componentPosition = this.el.nativeElement.offsetTop
      const scrollPosition = window.pageYOffset + 0
      const scrollPosition2 = window.pageYOffset + 50
      const scrollPosition3 = window.pageYOffset - 130
      const scrollPosition4 = window.pageYOffset - 270

      if (scrollPosition >= componentPosition) {
        this.state = 'shown'
      } else {
        this.state = 'hidden'
      }

      if (scrollPosition2 >= componentPosition) {
        this.stateLine = 'bigLine'
      }  

      if (scrollPosition3 >= componentPosition) {
        this.stateLine2 = 'bigLine'
      }  

      if (scrollPosition4 >= componentPosition) {
        this.stateLine3 = 'bigLine'
      }      

    }


}