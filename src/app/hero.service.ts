import { Injectable } from '@angular/core';
import {Hero}    from './hero';
import {HEROES}  from './mock-heroes';


@Injectable()
export class HeroService {

/* original no latency */ 	
	getHeroes(): Promise<Hero[]>{

		return Promise.resolve(HEROES);

	 } 

getHero(id: number): Promise<Hero> {
  return this.getHeroes()
             .then(heroes => heroes.find(hero => hero.id === id));
}
	 
}

