import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the LocationArrPipe pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
  name: 'LocationArrPipe',
})
export class LocationArrPipe implements PipeTransform {
  transform(map: {}, args: any[] = null): any {
        if (!map){
            return null;
        }
        return Object.keys(map)
            .map((key) => ({ 'key': key, 'value': map[key] }));
    }
}
