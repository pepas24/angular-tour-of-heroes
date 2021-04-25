import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from "rxjs/operators";
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES).pipe(delay(1500));
    return heroes;
  }
}
