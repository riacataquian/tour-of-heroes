import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroService } from './hero.service';

@NgModule({
  // Every component must be declared in exactly one NgModule.
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  // You must provide services in the dependency injection system
  // before Angular can inject it in a component.
  //
  // In the instance of HeroService, there are several ways to provide it:
  // in the HeroesComponent, in the AppComponent and in the AppModule (here).
  // Or use the cli: ng generate service hero --module=app
  //
  // The providers array tells Angular to create a *single*, *shared instance* of services
  // and inject into any class that asks for it.
  // https://angular.io/tutorial/toh-pt4#provide-the-heroservice
  providers: [
    HeroService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
