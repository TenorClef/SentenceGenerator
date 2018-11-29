import { Component, OnInit } from '@angular/core';

import { WordService } from '../shared/word.service';

@Component({
  selector: 'app-adjective',
  templateUrl: './adjective.component.html',
  styleUrls: ['./adjective.component.css']
})
export class AdjectiveComponent implements OnInit {

  adjective: string;
  newAdjective: string;

  constructor(private wordService: WordService) { }

  ngOnInit() {
  }

  getRandomAdjective() {
    this.adjective = this.wordService.getRandomAdjective();
  }

  addAdjective() {
    if(this.newAdjective != ''){
      this.wordService.addAdjective(this.newAdjective);
    }
    this.newAdjective = this.initializeAdjective();
  }

  initializeAdjective() {
    return '';
  }

}
