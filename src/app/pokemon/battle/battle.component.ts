import { Component, OnInit, ViewChild } from '@angular/core';
import data from '../../../assets/data/pokemon-material/json/pokeName.json';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.css']
})
export class BattleComponent implements OnInit {

  @ViewChild('pokeInfoChild', { static: false }) pokeInfoChild: any;
  @ViewChild('pokeInfoChildEnemy', { static: false }) pokeInfoChildEnemy: any;

  listTypeEnemy = ['BattleShiny', ''];
  listType = ['BatteBackShiny', 'BattleBack'];
  randomID = 1;

  constructor() {
  }

  ngOnInit() {
  }

  randomID640Max() {
    this.randomID = Math.floor(Math.random() * data.length) + 1;
    if (this.randomID >= 841) {
      this.randomID640Max();
    }
    return this.randomID;
  }

  randomIndex(size: any) {
    return Math.floor(Math.random() * size);
  }

  randomPokemon() {
    this.pokeInfoChildEnemy.blood = 100;
    this.pokeInfoChildEnemy.name = data[this.randomID640Max()].name;
    this.pokeInfoChildEnemy.type = this.listTypeEnemy[this.randomIndex(2)];
    this.pokeInfoChildEnemy.ngOnInit();

    this.pokeInfoChild.blood = 100;
    this.pokeInfoChild.name = data[this.randomID640Max()].name;
    this.pokeInfoChild.type = this.listType[this.randomIndex(2)];
    this.pokeInfoChild.ngOnInit();
  }

  hitEnemy() {
    this.pokeInfoChildEnemy.attack = true;
    setTimeout(() => {
      this.pokeInfoChildEnemy.attack = false;
    }, 700);
  }

  hitMe() {
    this.pokeInfoChild.attack = true;
    setTimeout(() => {
      this.pokeInfoChild.attack = false;
    }, 700);
  }

  attackEnemy() {
    this.hitEnemy();
    this.pokeInfoChildEnemy.dame = this.randomIndex(120) + 1;
    if (this.pokeInfoChildEnemy.blood > 0) {
      this.pokeInfoChildEnemy.blood -= this.pokeInfoChildEnemy.dame;
    }
  }

  attackMe() {
    this.hitMe();
    this.pokeInfoChild.dame = this.randomIndex(120) + 1;
    if (this.pokeInfoChild.blood > 0) {
      this.pokeInfoChild.blood -= this.pokeInfoChild.dame;
    }
  }
}

const listDataConst = data;
