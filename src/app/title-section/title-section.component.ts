import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition, group } from '@angular/animations';
import * as ScrollMagic from 'scrollmagic';


@Component({
  selector: 'app-title-section',
  templateUrl: './title-section.component.html',
  styleUrls: ['./title-section.component.css'] 
 
})
export class TitleSectionComponent implements OnInit  {

  public elbourne: string = "elbourne";
  public ebsite: string = "ebsite";
  public esigner: string = "esigner";
  constructor() {} 
 
  ngOnInit(){
    var controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({ duration: 0, offset: 100 }).setPin("#my-sticky-element", { pushFollowers: false }).addTo(controller);

  }

}
