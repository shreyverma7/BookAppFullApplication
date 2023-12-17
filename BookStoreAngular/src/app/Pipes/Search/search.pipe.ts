import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value:[], args: string): any[] {
    if(!value)
    {
      return [];
    }
    if(!args){
      return value;
    }
    return value.filter((item:any)=>{
      return item.bookName.toLocaleLowerCase().includes(args.toLocaleLowerCase()) 
    })
  }

}
