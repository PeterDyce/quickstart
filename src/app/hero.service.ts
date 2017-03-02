import { Injectable } from '@angular/core';
import {Hero}    from './hero';
import {HEROES}  from './mock-heroes';


@Injectable()
export class HeroService {

/* original no latency */ 	
	getHeroes(): Promise<Hero[]>{

		return Promise.resolve(HEROES);

	 } 
}

/* demo of 5 sec delay *
	getHeroes(): Promise<Hero[]> {
	  return new Promise(resolve => {
	    // Simulate server latency with 2 second delay
	    setTimeout(() => resolve(HEROES),5000);
	  });
	}
}

*/