import { Component, OnInit } from '@angular/core';

import { trigger, state, style, animate, transition, group } from '@angular/animations';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],

  animations:[
		trigger('fadeInSlow', [
				transition( 'void => *', [ style({ opacity: 0.0 }), animate('2000ms ease-in') ] )
			]),
		trigger( 'fadeInFast', [
				transition('void => *', [ style({ opacity: 0.0 }), animate('1100ms ease-in') ])
			]),
		trigger( 'fadeInMoveFast', [
				transition('void => *', [ style({ opacity: 0.0, padding: '35px' }), animate('700ms ease-in') ])
			])
	  ]


})
export class ContactComponent implements OnInit {
  gmail: string = "moc.liamg";
	gmail2: string = "gmail.com";
  
  title = 'Portfolio';
  state: string = 'small';

  events: string[] = [];
  opened: boolean;


  constructor() { }

  ngOnInit() {
  }

}
