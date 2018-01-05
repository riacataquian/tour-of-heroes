import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

// The @Injectable() decorator tells Angular that this service might itself have injected dependencies.
// Whether it does or it doesn't, it's *good practice* to keep the decorator.
@Injectable()
export class HeroService {

  constructor() { }

  getHeroes(): Observable<Hero[]> {
    // of(HEROES) returns an Observable<Hero[]> type
    // that emits a *single value*, the array of mock heroes.
    return of(HEROES);
  }
}
