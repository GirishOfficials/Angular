import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvellouschk'
})
export class MarvellouschkPipe implements PipeTransform {

  transform(value: number, param : string): string
  {
    var str :string = "";
    if(param == "Prime")
    {
      var str: string = "It is a prime number";
      for(var i = 2; i <= (value / 2) ; i++)
      {
        if(value % i == 0)
        {
          
          str = "It is not a Prime number";
          break;
        }
      }
    }


    if(param == "Perfect")
    {
      var sum : number = 0;
      for(var i = 2; i < value ; i++)
      {
        if(value % i == 0)
        {
          sum = sum + i;
        }
      }

      if(sum == value)
      {
        str = "It is Perfect Number";
      }
      else
      {
        str = "It is not a perfect number";
      }
    }


    
    if(param == "Even")
    {
      if(value % 2 == 0)
      {
        str =  "It is Even Number";
      }
      else 
      {
        str =  "It is not Even Number";
      }
      
    }
    if(param == "Odd")
    {
      if(value % 2 != 0)
      {
        str = "It is odd Number"
      }
      else {
        str = "It is not odd Number"
      }
      
    }

    return str;

  }

}
