import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';



@Component({
selector: 'my-app',
template: `<h1>{{title}}</h1>
		 <my-heroes></my-heroes>
`
  
})


export class AppComponent {
title = 'Tour of Marks';

}
