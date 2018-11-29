import { Component, OnInit } from '@angular/core';

import { WordService } from '../shared/word.service';

@Component({
  selector: 'app-sentence-generator',
  templateUrl: './sentence-generator.component.html',
  styleUrls: ['./sentence-generator.component.css']
})
export class SentenceGeneratorComponent implements OnInit {

  sentence: string;

  constructor(private wordService: WordService) { }

  ngOnInit() {
  }

  generateSentence() {
    this.sentence = this.wordService.generateSentence();
  }

}
