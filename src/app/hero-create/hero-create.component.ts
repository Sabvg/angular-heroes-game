import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-create',
  templateUrl: './hero-create.component.html',
  styleUrls: ['./hero-create.component.css']
})
export class HeroCreateComponent implements OnInit {

  heroes: Hero[];
  newPower: number;
  name: string;
  myHero: Hero;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

  addHeroName(name: string) {
    this.name = name.trim();

    (<HTMLInputElement>document.getElementById('created')).innerHTML=`
        Your hero created: ${name} <br><br> Get POWER FOR YOUR HERO by clicking here: <br>`;

    document.getElementById('btn-power')?.classList.remove('no-display');

    document.getElementById('app-power')?.classList.remove('no-display');

    return this.name;
  }


  getPower() {
    document.getElementById('animacion')?.classList.add('pause');

    this.newPower = Math.round(Math.random() * (1000 - 100) + 100);

    document.getElementById('showPower').innerHTML = `<br>CONGRATULATIONS, YOU HAVE: ${this.newPower.toString()}    POWER!<br><br>Now ADD YOUR POWER by clicking here:`;

    document.getElementById('btnAddPower')?.classList.remove('no-display');
    return this.newPower;
  }

  add(name: string, power: number) {
    name = this.name;
    name = name.trim();

    power= this.newPower;
    
    if (!name) { return; }

    this.heroService.addHero({ name, power } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);

        this.myHero = hero;

        console.log("vero hero this myHero" + this.myHero.name + this.myHero.power + this.myHero.rank);

        this.getMyHero(this.myHero);
        return this.myHero;
      });

      (<HTMLInputElement>document.getElementById('show')).innerHTML=`
      Power: ${power} is added to your ${name} hero <br><br> SEE YOUR HERO IN THE RANKING by clicking here:`;

      document.getElementById('go-hero')?.classList.remove('no-display');

      console.log("veo myHero en add " + this.myHero);
  }

  getMyHero(hero:Hero) {
    console.log("hero " + hero + hero.name + hero.power);
    this.myHero = hero;
    return  this.myHero;
  }   

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }

}
