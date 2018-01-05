import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  // The hero property must be an Input property,
  // annotated with the @Input() decorator,
  // because external components will bind it here.
  @Input() hero: Hero;

  constructor() { }

  ngOnInit() {
  }

}
