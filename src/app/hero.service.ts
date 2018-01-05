import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

// The @Injectable() decorator tells Angular that this service might itself have injected dependencies.
// Whether it does or it doesn't, it's *good practice* to keep the decorator.
@Injectable()
export class HeroService {
  // This is a typical service-in-service scenario:
  // you inject the MessageService into the HeroService
  // which is injected to a component.
  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    // of(HEROES) returns an Observable<Hero[]> type
    // that emits a *single value*, the array of mock heroes.
    return of(HEROES);
  }
}
