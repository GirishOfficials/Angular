import { Component, OnInit } from '@angular/core';
import { NumberService } from '../number.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html'
})


export class Child1Component implements OnInit {

  // it will store return value form numberService
  bRet1 : boolean = false;
  bRet2 : boolean = false;
  num1 : number = 2;
  num2 : number = 6;

  // Add instance of Service in constructor
  constructor(private _numberservice:NumberService)
  {}

  ngOnInit(): void 
  {
    this.bRet1 = this._numberservice.ChkPrime(this.num1);
    this.bRet2 = this._numberservice.ChkPrime(this.num2);
  }

}
