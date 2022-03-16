import { Pokemon } from './pokemon';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toString'
})
export class ToStringPipe implements PipeTransform {

  transform(value: Pokemon[]): string {
    let tmp ='';
    value.forEach((e) => tmp += e.name + " ")
    return tmp
  }

}
