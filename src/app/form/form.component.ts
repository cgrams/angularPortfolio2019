import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { trigger, state, style, animate, transition, group } from '@angular/animations';
import { RegistrationService } from '../registration.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],

	animations: [
		trigger( 'fadeInThanks', [
				state('small', style({ opacity: 0, transform: 'translateY(-20px)' })),
				state('big', style({ opacity: 1, transform: 'translateY(0px)'  })),

				transition('small => big', animate('300ms ease-in')),
				transition('big => small', animate('300ms ease-in'))		
			]),
	  ]

})
export class FormComponent implements OnInit {
  	trueFalse = "false";
	submitted: boolean = false;
	constructor( private registrationService: RegistrationService) { }
	ngOnInit() { }

	thankYouState: string = "showThankYouFalse";

	state:string = 'small';
	isDisabled = true;
	
	submitFunction(state){
		this.thankYouState = state;
		this.state = (this.state ==='small' ? 'big' : 'small');
		this.trueFalse = "true";
	}


	changeField(x){console.log(x);}

	first: string = "*";
	last: string = "*";
	email: string = "*";
	cacher: string = " A bot found your site buddy...";
	tellMe: string = " Tell me how I can help...";

	clearField( x , y ){
		let formVariable = ( <HTMLInputElement>document.getElementById(x) );
		formVariable.style.color = "black";
		formVariable.value == y ? formVariable.value = '' : console.log('Else Field Change CG');
	}
 
submitForm( state, empForm: FormsModule){
		console.log(JSON.stringify(this.first));
		console.log(JSON.stringify(this.last));
		this.submitted = true;
		this.thankYouState = state;
		this.state = (this.state ==='small' ? 'big' : 'small');
		this.trueFalse = "true";
	}

}
