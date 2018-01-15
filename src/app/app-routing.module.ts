import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroesComponent } from './heroes/heroes.component';

// Routes tell the router which view to display when a user clicks a link or pastes a URL into the browser address bar.
// A typical Angular Route has two properties:
// 1. path: a string that matches the URL in the browser address bar.
// 2. component: the component that the router should create when navigating to this route.
const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
];

@NgModule({
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
