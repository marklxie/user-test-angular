import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Pipe, PipeTransform } from '@angular/core';
import { SSL_OP_CRYPTOPRO_TLSEXT_BUG } from 'constants';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(list:any[], sortCriteria: string = "", asc: boolean = true): any[]{
    if(sortCriteria == ""){
      return list;
    }
    
    function test(a: any, b: any):number{
      let colA = a[sortCriteria];
      console.log(typeof colA);
      console.log(colA);
      let colB = b[sortCriteria];
      console.log(typeof colB)
      console.log(colB);
      return 0;
    }

    const sortfn = (a: any, b: any): number =>{
      let colA = a[sortCriteria];
      colA = (typeof colA) == "number" ? colA : colA.toString().toLowerCase();
      console.log(typeof colA);
      let colB = b[sortCriteria];
      colB = (typeof colB) == "number" ? colB : colB.toString().toLowerCase(); 
      console.log(typeof colA); 
        if(colA === colB){
          return 0;}
        if(colA < colB){ 
          return (asc) ? -1 : 1; }
        else{
          return (asc) ? 1 : -1;
       }
    }

    return list.sort(sortfn);
  }

}
