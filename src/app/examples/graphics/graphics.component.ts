import { Component, OnInit } from '@angular/core';
import * as vivus from 'vivus';

@Component({
  selector: 'app-graphics',
  templateUrl: './graphics.component.html',
  styleUrls: ['./graphics.component.css']
})
export class GraphicsComponent implements OnInit {

  constructor() { }
  ngOnInit() {}
  
  drawWhiteLineGraphics(){
	new vivus('animateGraphics', {type: 'scenario', duration: 70, start: 'autostart', dashGap: 2, forceRender: false},);
	}
}
