import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Hero } from '../classes/hero';

@Component({
  selector: 'app-form-td',
  templateUrl: './form-td.component.html',
  styleUrls: ['./form-td.component.scss']
})
export class FormTDComponent implements OnInit {
  hero = new Hero;
  @ViewChild('f') mioForm!: NgForm;

  constructor() { 
    
  }

  ngOnInit(): void {
  }

  createHero(){
    
  }

}
