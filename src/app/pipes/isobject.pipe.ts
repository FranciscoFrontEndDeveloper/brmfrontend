import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isobject',
})
export class IsobjectPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return value !== null && typeof value ==='object';
  }
}
