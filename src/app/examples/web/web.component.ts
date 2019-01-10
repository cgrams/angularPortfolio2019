import { Component, OnInit } from '@angular/core';
import * as vivus from 'vivus';

@Component({
  selector: 'app-web',
  templateUrl: './web.component.html',
  styleUrls: ['./web.component.css']
})
export class WebComponent implements OnInit {

	constructor(){}
	ngOnInit(){}

	drawWhiteLineWeb(){
		new vivus('animateWeb', {type: 'sync', duration: 100, start: 'autostart', dashGap: 2, forceRender: false},);		
	}


}
