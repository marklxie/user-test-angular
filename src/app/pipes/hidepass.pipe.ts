import { Pipe, PipeTransform } from '@angular/core';
import { HAMMER_LOADER } from '@angular/platform-browser';
import { stringify } from 'querystring';

@Pipe({
  name: 'hidepass'
})
export class HidepassPipe implements PipeTransform {

  transform(password:string): string {
    let hold: string = "";
    let length: number = password.length;
    for(let i = 0; i < length; i++){
      hold += "#";
    }
    return hold;
  }

}
