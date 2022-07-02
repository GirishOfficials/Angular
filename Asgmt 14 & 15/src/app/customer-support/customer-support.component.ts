import { Component, OnInit } from '@angular/core';

// import classes which are required for reactive forms
import {FormBuilder,FormGroup,Validators, FormControl} from '@angular/forms'

@Component({
  selector: 'app-customer-support',
  templateUrl: './customer-support.component.html',
  styleUrls: ['./customer-support.component.css']
})
export class CustomerSupportComponent implements OnInit {

  // Inject FormBuilder service
  constructor(public fbobj : FormBuilder){}
  ngOnInit(): void {
  }

  // valid pattern for name and city
  validPatternName = "^[a-zA-Z]+$"; // only letters
  // valid pattern for phone
  validPatternPhone ="^[0-9]+$";
  // validation for email
  validPatternEmail = "^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";


  MarvellousForm = this.fbobj.group(
    {
      // Add validations
      firstName :['', [Validators.required, Validators.pattern(this.validPatternName)]],
      lastName : ['', [Validators.required, Validators.pattern(this.validPatternName)] ],
      phone :  ['', [Validators.required, Validators.pattern(this.validPatternPhone), Validators.maxLength(10), Validators.minLength(10)] ],
      email :  ['', [Validators.required, Validators.pattern(this.validPatternEmail)]],
      city :  ['', [Validators.required, Validators.pattern(this.validPatternName), Validators.minLength(4)]],
      zipcode : ['', [Validators.required, Validators.pattern(this.validPatternPhone), Validators.maxLength(5), Validators.minLength(5)] ],
      comment : ['', [Validators.required, Validators.minLength(30)]],

    }
  );
  
  // Method to set FormControl fields through program

}



