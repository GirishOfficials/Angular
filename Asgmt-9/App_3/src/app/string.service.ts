import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringService {

  constructor() { }

  CountCapital(str : string) : number
  {
    var i : number = 0, Cnt = 0;

    for(i = 0; i < str.length; i++)
    {
      if( (str[i] >= 'A') && (str[i] <= 'Z'))
      {
        Cnt++;
      }
    }
    return Cnt;
  }
}
