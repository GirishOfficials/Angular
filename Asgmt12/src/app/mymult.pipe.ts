import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mymult'
})
export class MymultPipe implements PipeTransform {

  transform(value: number, param: number): number
  {
    return value * param;
  }

}
