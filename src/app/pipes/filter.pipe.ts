import { Pipe, PipeTransform } from '@angular/core';
import { ITodo } from '../models/todo.interface';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(value: ITodo[], filterString: string, property: string): ITodo[] {
    if (!value || value.length === 0 || !filterString) {
      return value;
    }
    let filteredList: ITodo[] = [];
    for (let item of value) {
      if (item[property].toLowerCase().includes(filterString.toLowerCase())) {
        filteredList.push(item);
      }
    }
    return filteredList;
  }
}
