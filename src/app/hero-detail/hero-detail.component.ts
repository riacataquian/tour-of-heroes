import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../hero'
import { HeroService } from '../hero.service'

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  constructor (
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location,
  ) {
  }

  // The hero property must be an Input property,
  // annotated with the @Input() decorator,
  // because external components will bind it here.
  @Input() hero: Hero;

  ngOnInit() {
    this.getHero();
  }

  getHero(): void {
    // The route.snapshot is the static image of the route information
    // shortly after the component was created.
    // The Javascript (+) operator converts the string to a number.
    const id = +this.route.snapshot.paramMap.get('id');

    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack());
  }
}
