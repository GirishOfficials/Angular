import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArithmaticService {

  constructor() { }


  Add(No1 : number, No2 : number) : number
  {
    return No1+No2;
  }

  
  Substraction(No1 : number, No2 : number) : number
  {
    return No1-No2;
  }



}
