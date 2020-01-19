import { Component, OnInit } from '@angular/core';
import data from '../../../assets/data/pokemon-material/json/pokemons.json';

@Component({
  selector: 'app-regex-json',
  templateUrl: './regex-json.component.html',
  styleUrls: ['./regex-json.component.css']
})
export class RegexJsonComponent implements OnInit {

  result = '';

  constructor() { }

  ngOnInit() {

  }

}
