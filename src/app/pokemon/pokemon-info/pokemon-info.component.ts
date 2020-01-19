import { Component, OnInit, Input } from '@angular/core';

// Pokemon đang đứng trên bệ chiến đấu.
@Component({
  selector: 'app-pokemon-info',
  templateUrl: './pokemon-info.component.html',
  styleUrls: ['./pokemon-info.component.css']
})
export class PokemonInfoComponent implements OnInit {

  // Hình thức xuất hiện của pokemon: mình, đối thủ, có shinny hay không...
  @Input() type = 'Batte';

  // Tên của pokemon sẽ xuất hiện
  @Input() name = 'bulbasaur';

  // Link API chứa gì pokemon.
  link = '';

  // Link Background.
  linkBackGround = '';

  // Link hiệu ứng skill
  linkEffectSkill = '';

  // Có đang tấn công hay không. (Cái này sẽ kết hiợpc với hàm attack.)
  attack = false;

  // Phần trăm máu.
  blood = 100;
  dame = 100;

  // Danh sách tên các background, skill...
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

  rootLink = '../../../assets/data/pokemon-material/Sprites/';

  rootBackGround = '../../../assets/data/pokemon-material/Battlebacks/';

  rootEffectSkill = '../../../assets/data/pokemon-material/Skill/';

  linkPokeBall = '../../../assets/data/pokemon-material/Battlebacks/pokeball.gif';

  randomIndex(size: any) {
    return Math.floor(Math.random() * size);
  }

  constructor() {
  }

  ngOnInit() {
    this.link = this.rootLink + this.name + '_Battle.gif';
    if (this.type === 'BattleBack') {
      this.link = this.rootLink + this.name + '_BattleBack.gif';
    } else
      if (this.type === 'BatteBackShiny') {
        this.link = this.rootLink + this.name + '_BattleBackShiny.gif';
      } else
        if (this.type === 'BattleShiny') {
          this.link = this.rootLink + this.name + '_BattleShiny.gif';
        }
    this.linkEffectSkill = this.rootEffectSkill + this.listEffectSkill[this.randomIndex(5)];
    this.linkBackGround = this.rootBackGround + this.listBackGround[this.randomIndex(1)];
  }

  // Kiếm tra xem có phải là pokmemon shiny không.
  checkShiny() {
    if (this.type === 'BatteBackShiny' || this.type === 'BattleShiny') {
      return true;
    } else {
      return false;
    }
  }
}
