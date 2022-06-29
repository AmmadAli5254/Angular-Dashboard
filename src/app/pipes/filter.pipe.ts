import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(searchArray: any, value: any, type:any) {
    if (value === undefined) {
      return searchArray
    }
    value = value.trim()
    if (value === "") {
      return searchArray
    }
    return searchArray.filter((value1: any) => {
      return value1[type].toLowerCase().includes(value.toLowerCase())
    })
  }

}
