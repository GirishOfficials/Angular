import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCompsuccess]'
})
export class CompsuccessDirective {

  constructor(private _obj : ElementRef) 
  { }

  @HostListener('mouseenter')onmouseenter()
  {
    this._obj.nativeElement.style.color = 'green';
  }

  @HostListener('mouseleave')onmouseleave()
  {
    this._obj.nativeElement.style.color = 'black';
  }

}
