import { Component, OnInit } from '@angular/core';
import { ArithmaticService } from '../arithmatic.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
})
export class DemoComponent implements OnInit {

  // variables for store the data which will come from service
  public AddNum : number = 0;
  public SubNum : number = 0;


  // Add instances of service in constructor
  constructor(private _arithmaticService:ArithmaticService)
  {}

  // Accessing service
  ngOnInit()
  {
    this.AddNum = this._arithmaticService.Add(5,10);
    this.SubNum = this._arithmaticService.Substraction(5,10);
  }

}
