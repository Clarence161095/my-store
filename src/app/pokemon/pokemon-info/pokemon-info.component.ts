import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-info',
  templateUrl: './pokemon-info.component.html',
  styleUrls: ['./pokemon-info.component.css']
})
export class PokemonInfoComponent implements OnInit {

  @Input() type = 'Batte';
  @Input() name = 'bulbasaur';

  listBackGround = [
    'enemybaseFieldGrassEve.png',
    'enemybaseForestNight.png',
    'enemybaseMountainEve.png',
    'enemybaseWater.png'
  ];

  listEffectSkill = [
    'Bom.gif',
    'Electric.gif',
    'Puch.gif',
    'Puch-Bom.gif',
    'Tornado.gif'
  ];

  // rootLinkBattle = 'https://img.pokemondb.net/sprites/black-white/anim/normal/';
  // rootLinkBattleShiny = 'https://img.pokemondb.net/sprites/black-white/anim/shiny/';

  // rootLinkBattleBack = 'https://img.pokemondb.net/sprites/black-white/anim/back-normal/';
  // rootLinkBattleBackShiny = 'https://img.pokemondb.net/sprites/black-white/anim/back-shiny/';

  rootLinkBattle = 'http://www.pokestadium.com/sprites/xy/';
  rootLinkBattleShiny = 'http://www.pokestadium.com/sprites/xy/shiny/';

  rootLinkBattleBack = 'http://www.pokestadium.com/sprites/xy/back/';
  rootLinkBattleBackShiny = 'http://www.pokestadium.com/sprites/xy/shiny/back/';

  rootBackGround = '../../../assets/data/pokemon-material/Battlebacks/';

  rootEffectSkill = '../../../assets/data/pokemon-material/Skill/';

  link = '';
  linkBackGround = '';
  linkEffectSkill = '';
  attack = false;

  randomIndex(size: any) {
    return Math.floor(Math.random() * size);
  }

  constructor() {
  }

  ngOnInit() {
    this.link = this.rootLinkBattle + this.name + '.gif';
    if (this.type === 'BattleBack') {
      this.link = this.rootLinkBattleBack + this.name + '.gif';
    } else
      if (this.type === 'BatteBackShiny') {
        this.link = this.rootLinkBattleBackShiny + this.name + '.gif';
      } else
        if (this.type === 'BattleShiny') {
          this.link = this.rootLinkBattleShiny + this.name + '.gif';
        }
    this.linkEffectSkill = this.rootEffectSkill + this.listEffectSkill[this.randomIndex(5)];
    this.linkBackGround = this.rootBackGround + this.listBackGround[this.randomIndex(1)];
  }

  checkShiny() {
    if (this.type === 'BatteBackShiny' || this.type === 'BattleShiny') {
      return true;
    } else {
      return false;
    }
  }
}
