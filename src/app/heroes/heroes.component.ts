import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { Observable } from 'rxjs/Observable';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];

  // The parameter simultaneously defines a private heroService property
  // and identifies it as a HeroService injection site.
  // When Angular creates a HeroesComponent, the Dependency injection system
  // sets the heroService parameter to the singleton instance of HeroService.
  constructor(private heroService: HeroService) {}

  // While you could call getHeroes() in the constructor, that's not the best practice.
  // Reserve the constructor for simple initialization such as wiring constructor parameters to properties.
  // The constructor shouldn't do anything.
  // It certainly shouldn't call a function that makes HTTP requests to a remote server as a real data service would.
  ngOnInit() {
    this.getHeroes();
  }

  /**
    * getHeroes retrieves the heroes from HeroService.
    */
  getHeroes(): void {
    // Synchronous approach.
    // this.heroes = this.heroService.getHeroes();

    // Asynchronous approach.
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }
}
