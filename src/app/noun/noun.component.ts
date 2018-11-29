import { Component, OnInit } from '@angular/core';

import { WordService } from '../shared/word.service';
import { Noun } from '../shared/noun';

@Component({
  selector: 'app-noun',
  templateUrl: './noun.component.html',
  styleUrls: ['./noun.component.css']
})
export class NounComponent implements OnInit {

  randomNoun: Noun;
  newNoun: Noun;

  constructor(private wordService: WordService) { }

  ngOnInit() {
    this.newNoun = this.initializeNoun();
  }

  getRandomNoun() {
    this. randomNoun = this.wordService.getRandomNoun();
  }

  saveNoun() {
    this.wordService.addNoun(this.newNoun);
    this.newNoun = this.initializeNoun();
  }

  initializeNoun(): Noun {
    return {
      singular: '',
      plural: ''
    }
  }

}
