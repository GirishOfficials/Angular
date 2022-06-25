import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myadd'
})
export class MyaddPipe implements PipeTransform {

  transform(value1: number, value2 : number): number
  {
    return (value1 + value2 + value1 - value1)
  }

}
