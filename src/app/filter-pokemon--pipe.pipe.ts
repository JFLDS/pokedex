import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPokemonPipe', pure: false
})

export class FilterPokemonPipePipe implements PipeTransform {

  /*transform(value: any[], property?: string, searchString?: string): any {
    if (typeof value !== 'undefined') {
      return value.filter((e) => {
        // @ts-ignore
        return e[property].toLowerCase().indexOf(searchString.toLowerCase()) !== -1;
      });
    } else {
      return [];
    }
  }*/

  transform(value: any[], property?: string, searchString?: string): any {
    if (typeof value !== 'undefined') {
      return value.filter((e) => {
        const name = e['name'].toLowerCase();
        const id = e['id'].toString();
        // @ts-ignore
        searchString = searchString.toLowerCase();
        return name.includes(searchString) || id.includes(searchString);
      });
    } else {
      return [];
    }
  }

}
