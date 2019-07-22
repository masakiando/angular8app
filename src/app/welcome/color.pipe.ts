import { Pipe, PipeTransform } from '@angular/core';
import { log } from 'util';

@Pipe({
  name: 'color',
  pure: false,
})
export class ColorPipe implements PipeTransform {

  transform(cars: any, carColor: string): any {
    console.log(carColor);
    if (!carColor) {
      return cars;
    }
    return cars.filter(car => car.color.includes(carColor));
  }

}
