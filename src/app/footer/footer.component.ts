import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']

})

export class FooterComponent{
	constructor() {
		console.info('%c Cool. Thanks for checking out my code. I like working with other coders. 🤔 ', 'background-color: #bdb3b3; font-size:25px; color:#c33329; font-family:"Lucida Console"');
	 }
	thisYear: number = Date.now();
	pageAuthor: string = "C. Grams";
}