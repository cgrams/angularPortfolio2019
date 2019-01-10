import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormCGOneService {
	
	_url = '';

  constructor(private _http: HttpClient) { }

  enroll(){}
  
  }
