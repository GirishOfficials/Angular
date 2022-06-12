import { Component, OnInit } from '@angular/core';
import { NumberService } from '../number.service';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html'
})
export class ChildComponent implements OnInit {

    // for numservice
    bRet1 : boolean = false;
    bRet2 : boolean = false;
    num1 : number = 2;
    num2 : number = 5;


    // for string service
    Count1 : number = 0;
    Count2 : number = 0;


  constructor(private _numberservice : NumberService, private  _stringservice : StringService) { }

  ngOnInit(): void 
  {
    this.bRet1 = this._numberservice.ChkPrime(53); 
    this.bRet2 = this._numberservice.ChkPrime(100);

    this.Count1 = this._stringservice.CountCapital("MarveLLouS");
    this.Count2 = this._stringservice.CountCapital("INFOSYSTEMS");
  }

}
