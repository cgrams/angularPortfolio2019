import { Component, OnInit } from '@angular/core';

import { trigger, state, style, animate, transition, group } from '@angular/animations';

@Component({
  selector: 'app-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.css', './mobileExamples.css'],


	animations: [
		trigger( 'listCode', [
				state('small', style({ opacity: 0, transform: 'translateY(-20px)' })),
				state('big', style({ opacity: 1, transform: 'translateY(0px)'  })),

				transition('small => big', animate('300ms ease-in')),
				transition('big => small', animate('300ms ease-in'))		
			]),
		trigger( 'listGraphics', [
				state('small2', style({ opacity: 0, transform: 'translateY(-20px)' })),
				state('big2', style({ opacity: 1, transform: 'translateY(0px)'  })),

				transition('small2 => big2', animate('300ms ease-in')),
				transition('big2 => small2', animate('300ms ease-in'))		
			]),
		trigger( 'listProjects', [
				state('small3', style({ opacity: 0, transform: 'translateY(-20px)' })),
				state('big3', style({ opacity: 1, transform: 'translateY(0px)'  })),

				transition('small3 => big3', animate('300ms ease-in')),
				transition('big3 => small3', animate('300ms ease-in'))		
			])				
	  ]
})
export class ExamplesComponent implements OnInit {

	codeListState: string = "showThankYouFalse";
	graphicsListState: string = "showThankYouFalse2";
	webListState: string = "showThankYouFalse3";

	state:string = 'small';
	state2:string = 'small2';
	state3:string = 'small3';	

	showCodeState(state){
		this.codeListState = state;
		this.state = (this.state ==='small' ? 'big' : 'small');
	}

	showGraphicsState(state2){
		this.graphicsListState = state2;
		this.state2 = (this.state2 ==='small2' ? 'big2' : 'small2');
	}

	showWebState(state3){
		this.webListState = state3;
		this.state3 = (this.state3 ==='small3' ? 'big3' : 'small3');
	}

showCodeBackground(){
	document.getElementById("moveSVGup").style.fill = "#55100c";
	document.getElementById("moveSVGup").style.stroke = "white";
}
leaveCode(){
	document.getElementById("moveSVGup").style.fill = "none";
	document.getElementById("moveSVGup").style.stroke = "none";	
}

  constructor(){}
  ngOnInit(){}

}