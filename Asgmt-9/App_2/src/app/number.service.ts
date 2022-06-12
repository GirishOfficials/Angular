import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberService {

  constructor() { }

  ChkPrime(No : number) : boolean
  {
    var Cnt = 0;
    var iFlag : boolean = false;

    for(var i = 1; i <= No; i++)
    {
      if((No % i) == 0)
      {
        Cnt++;
      }
      
      if(Cnt > 2)
      {
        iFlag = true;
        break;
      }
    }

    return iFlag;
  }
}
