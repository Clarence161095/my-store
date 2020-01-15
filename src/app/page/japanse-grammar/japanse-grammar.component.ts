import { Component, OnInit, HostListener } from '@angular/core';
import data from '../../../assets/data/DataJsonJlptVietNam.json';

@Component({
  selector: 'app-japanse-grammar',
  templateUrl: './japanse-grammar.component.html',
  styleUrls: ['./japanse-grammar.component.css']
})
export class JapanseGrammarComponent implements OnInit {

  levelList = ['N5', 'N4', 'N3', 'N2', 'N1', 'All'];
  selectedLevel = 'All';
  filter = true;

  // tslint:disable-next-line: no-use-before-declare
  listData = listDataConst;

  constructor() {
  }

  ngOnInit() {
  }

  openFilter() {
    if (this.filter === true) {
      this.filter = false;
    } else {
      this.filter = true;
    }
  }

  search(event: any) {

    this.changeLevel(this.selectedLevel);
    if (event.target.value !== '') {
      this.listData = this.listData.filter(item =>
        item.description.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1 ||
        item.name.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1 ||
        this.plusMeaningUse(item.meaning).toLowerCase().indexOf(event.target.value.toLowerCase()) > -1 ||
        this.plusMeaningUse(item.use).toLowerCase().indexOf(event.target.value.toLowerCase()) > -1 ||
        this.plusSentence(item.sentence).toLowerCase().indexOf(event.target.value.toLowerCase()) > -1
      );
    }
  }

  plusMeaningUse(listString: any[]) {
    let result = '';
    listString.forEach(element => {
      result += element.value + ' ';
    });
    return result;
  }

  plusSentence(listString: any[]) {
    let result = '';
    listString.forEach(element => {
      result += element.reibunJA + ' ' + element.reibunVN + ' ' + element.reibunRO;
    });
    return result;
  }

  changeLevel(event: any) {
    this.listData = listDataConst;
    this.selectedLevel = event;
    if (event !== 'All') {
      this.listData = this.listData.filter(item => item.level === event);
    }
  }

  isShow: boolean;
  topPosToStartShowing = 100;

  @HostListener('window:scroll')
  checkScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (scrollPosition >= this.topPosToStartShowing) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }

  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
}

const listDataConst = data;
