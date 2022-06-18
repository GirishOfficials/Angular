import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{

  strlength : any;

  sendData(data : any)
  {
    this.strlength = data.length;
    console.log(data);
  }
}
