import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { Tags, TagsNameMap } from '../interface/unit';

@Injectable({
  providedIn: 'root',
})
@Pipe({ name: 'tags' })
export class TagsPipe implements PipeTransform {
  transform(value: Tags) {
    return TagsNameMap[value];
  }
}
