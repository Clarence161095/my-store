import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  @ViewChild('battle', { static: false }) battle: any;

  constructor() {
  }

  ngOnInit() {
  }

  randomPokemon() {
    this.battle.randomPokemon();
  }

  attackEnemy() {
    this.battle.attackEnemy();
  }

  attackMe() {
    this.battle.attackMe();
  }

}
