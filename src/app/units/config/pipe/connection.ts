import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
@Pipe({ name: 'connection' })
export class ConnectionPipe implements PipeTransform {
  transform(value: boolean) {
    return value ? 'Connected' : 'No Connected';
  }
}
