import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];

  public myHero: Hero;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  } 

  order() {
    this.myHero  = this.heroes[this.heroes.length - 1];

    console.log("my heroe joderrrr" + this.myHero.name + this.myHero.power);

    let num:number = 0;
    for (let i = 0; i < this.heroes.length; i++) {
      
      this.heroes.sort(((a, b) => b.power - a.power));
      console.log("heroes ordenados por potencia: " + this.heroes[i].power + " el ranking es : " + num);
      num++;

      this.heroes[i].rank = num;
    }

    for (let i = 0; i < this.heroes.length; i++) {
      console.log(this.myHero.name + this.myHero.rank + this.myHero.power);
  
    if(this.heroes[i].name == this.myHero.name) {
  
      if(this.myHero.rank == 1 || this.myHero.rank == 2 || this.myHero.rank == 3) {
        if(this.myHero.rank == 1 ) {
          document.getElementById('result-rank')?.classList.remove('no-display');
          document.getElementById('result-rank').innerHTML = `CONGRATULATIONS, YOUR HERO ${this.myHero.name} IS IN THE 1st POSITION!`;
        } 
        if(this.myHero.rank == 2) {
          document.getElementById('result-rank')?.classList.remove('no-display');
          document.getElementById('result-rank').innerHTML = `CONGRATULATIONS, YOUR HERO ${this.myHero.name} IS IN THE 2nd POSITION!`;
        } 
        if(this.myHero.rank == 3) {
          document.getElementById('result-rank')?.classList.remove('no-display');
          document.getElementById('result-rank').innerHTML = `CONGRATULATIONS, YOUR HERO ${this.myHero.name} IS IN THE 3rd POSITION!`;
        } 
      } else {
        document.getElementById('result-rank')?.classList.remove('no-display');
        document.getElementById('result-rank').innerHTML = `SORRY, YOUR HERO ${this.myHero.name} IS NOT IN THE FIRST THREE POSITIONS. <br><br> TRY AGAIN, YOU HAVE TWO MORE OPPORTUNITIES:`;

        document.getElementById('try')?.classList.remove('no-display');
      }
    return;
    }
    }
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }
}

