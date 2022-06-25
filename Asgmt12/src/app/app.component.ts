import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'Assignment12';

  str : String = "";
  No: number = 11;

  public getName(data : any)
  {
    this.str = data;
  }


}
