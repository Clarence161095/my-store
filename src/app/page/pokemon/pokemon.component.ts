import { Component, OnInit, ViewChild } from '@angular/core';
import data from '../../../assets/data/pokemon-material/json/pokeName.json';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

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
    this.randomID = Math.floor(Math.random() * listDataConst.length) + 1;
    if (this.randomID >= 650) {
      this.randomID640Max();
    }
    return this.randomID;
  }



  randomIndex(size: any) {
    return Math.floor(Math.random() * size);
  }

  randomPokemon() {
    this.pokeInfoChildEnemy.name = listDataConst[this.randomID640Max()].name;
    this.pokeInfoChildEnemy.type = this.listTypeEnemy[this.randomIndex(2)];
    this.pokeInfoChildEnemy.ngOnInit();

    this.pokeInfoChild.name = listDataConst[this.randomID640Max()].name;
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
  }

  attackMe() {
    this.hitMe();
  }
}

const listDataConst = data;
