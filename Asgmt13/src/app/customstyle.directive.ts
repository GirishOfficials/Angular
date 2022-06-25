import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomstyle]'
})
export class CustomstyleDirective {

  constructor(private _obj : ElementRef) 
  {
    this._obj.nativeElement.style.background = 'yellow';
    //this._obj.nativeElement.text = 'bold';
  }
  

}
