import { Component, OnInit } from '@angular/core';
import * as vivus from 'vivus';


@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.css']
})
export class CodeComponent implements OnInit {

  constructor() {}
  ngOnInit() {}

  drawWhiteLineCode = function(){
		new vivus('moveSVGup', {type: 'scenario', duration: 70, start: 'autostart', dashGap: 200, forceRender: false},);
	}
}