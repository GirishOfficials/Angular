import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myRev'
})
export class MyRevPipe implements PipeTransform 
{

  transform(value: String): String 
  {
    let temp : String = value;
    

    var str = temp.split("").reverse().join("");

    return str;
  }

}
