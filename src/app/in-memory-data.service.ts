import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Dr Nice', power:100, rank: undefined },
      { id: 12, name: 'Narco', power:120, rank: undefined },
      { id: 13, name: 'Bombasto', power:400, rank: undefined },
      { id: 14, name: 'Celeritas', power:280, rank: undefined },
      { id: 15, name: 'Magneta', power:500, rank: undefined },
      { id: 16, name: 'RubberMan', power:880, rank: undefined },
      { id: 17, name: 'Dynama', power:370, rank: undefined },
      { id: 18, name: 'Dr IQ', power:610, rank: undefined },
      { id: 19, name: 'Magma', power:150, rank: undefined },
      { id: 20, name: 'Tornado', power:720, rank: undefined }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}