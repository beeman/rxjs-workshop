import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { of } from 'rxjs';

import { BeerModel } from '../collections/beer.model';
import { LessonModel } from '../collections/lesson.model';
import { NoteModel } from '../collections/note.model';

const collections = {
  beers: BeerModel,
  lesson: LessonModel,
  notes: NoteModel,
};

@Injectable()
export class CollectionResolver implements Resolve<any> {
  resolve(route: ActivatedRouteSnapshot) {
    let {collectionId} = route.params;
    if (!collectionId || !collections[collectionId]) {
      collectionId = 'beers';
    }
    return of(collections[collectionId]);
  }
}
