import { Component, OnInit, Output, EventEmitter} from '@angular/core';
// import EventEmiiter from @angular/core

// IDE automatically import it but we have to import it from @angular/core
// import { EventEmitter } from 'stream';   

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // Send child data to parant
  @Output() public Myevent = new EventEmitter();

  // Method invoke when button is clcked
  public buttonClick(data : any)
  {
    this.Myevent.emit(data);
  }
  

}
