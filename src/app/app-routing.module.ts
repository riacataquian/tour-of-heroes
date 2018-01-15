import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';

// Routes tell the router which view to display when a user clicks a link or pastes a URL into the browser address bar.
// A typical Angular Route has two properties:
// 1. path: a string that matches the URL in the browser address bar.
// 2. component: the component that the router should create when navigating to this route.
const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  // The colon (:) in the path indicates that :id is a placeholder for a specific hero id.
  { path: 'detail/:id', component: HeroDetailComponent },
  // This route redirects a URL that fully matches the empty path to the route whose path is '/dashboard'.
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  exports: [ RouterModule ],
  // Initialize the router and start it listening to browser changes.
  // The method is called forRoot() because you configure the router at the application's root level.
  // The forRoot() method supplies the service providers and directives needed for routing,
  // and performs the initial navigation based on the current browser URL.
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
