import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

	opened: boolean;

	constructor() { }

	ngOnInit() {}

	hoverBarColor(){
		document.getElementById('menuBar1').style.stroke ="#c33329";
		document.getElementById('menuBar2').style.stroke ="#c33329";
		document.getElementById('menuBar3').style.stroke ="#c33329";
	}


	hoverBarClear(){
		document.getElementById('menuBar1').style.stroke ="white";
		document.getElementById('menuBar2').style.stroke ="white";
		document.getElementById('menuBar3').style.stroke ="white";
	}
}
