import { Component, OnInit } from '@angular/core';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html'
})
export class Child2Component implements OnInit {

  Count1 : number = 0;
  Count2 : number = 0;

  constructor(private _stringservice:StringService){}

  ngOnInit(): void 
  {
    this.Count1 = this._stringservice.CountCapital("MarveLLouS");
    this.Count2 = this._stringservice.CountCapital("Infosystems");
  }

}
