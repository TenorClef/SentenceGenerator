import { Component, OnInit } from '@angular/core';
import { WordService } from '../shared/word.service';

@Component({
  selector: 'app-adverb',
  templateUrl: './adverb.component.html',
  styleUrls: ['./adverb.component.css']
})
export class AdverbComponent implements OnInit {

  adverb: string;
  newAdverb: string;

  constructor(private wordService: WordService) { }

  ngOnInit() {
    this.newAdverb = this.initializeAdverb();
  }

  getRandomAdverb() {
    this.adverb = this.wordService.getRandomAdverb();
  }

  addAdverb() {
    if(this.newAdverb != '') {
      this.wordService.addAdverb(this.newAdverb);
      this.newAdverb = this.initializeAdverb();
    }    
  }

  initializeAdverb() {
    return '';
  }

}
