import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  functionSubMenu = false;

  constructor() {
  }

  ngOnInit() {
  }

  changfunctionSubMenu() {
    if (this.functionSubMenu === true) {
      this.functionSubMenu = false;
    } else {
      this.functionSubMenu = true;
    }
  }

  resetSubMenu() {
    this.functionSubMenu = false;
  }

}
