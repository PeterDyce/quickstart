import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import {  Router } from '@angular/router';




@Component({
   moduleId: module.id,
   selector: 'my-heroes',
   templateUrl: './heroes.component.html',
   styleUrls: ['./heroes.component.css']
   
})

export class HeroesComponent implements OnInit {

   
   
   heroes: Hero[];
   selectedHero: Hero;

   constructor(
     private router:      Router,
     private heroService: HeroService) { }

   /* getHeroes is a service wrapper */
   getHeroes(): void {
      this.heroService.getHeroes().then(heroes => this.heroes = heroes);
   }

   /* this calls the service when AppComonent is initialised 
   We have to change our implementation to act on the Promise  in the serrvice.
   When it resolves. 
   When the Promise resolves successfully, then we will have heroes to display.*/

   ngOnInit(): void {
      this.getHeroes();
   }

   onSelect(hero: Hero): void {
      this.selectedHero = hero;
   }

   gotoDetail(): void {
  this.router.navigate(['/detail', this.selectedHero.id]);
}

}
