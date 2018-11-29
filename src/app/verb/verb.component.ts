import { Component, OnInit } from '@angular/core';

import { WordService } from '../shared/word.service';
import { Verb } from '../shared/verb';

@Component({
  selector: 'app-verb',
  templateUrl: './verb.component.html',
  styleUrls: ['./verb.component.css']
})
export class VerbComponent implements OnInit {

  randomVerb: Verb;
  newVerb: Verb;

  constructor(private wordService: WordService) { }

  ngOnInit() {
    this.newVerb = this.initializeVerb();
  }

  getRandomVerb() {
    this.randomVerb = this.wordService.getRandomVerb();
  }

  guessVerbStructure(v: Verb): Verb {
    v.present3 = v.present1 + 's';
    v.past = v.present1 + 'ed';
    v.future = 'will ' + v.present1;
    v.participle = v.present1 + 'ing';
    v.pastParticiple = v.present1 + 'ed';

    return v;
  }

  initializeVerb(): Verb {
    return {
      present1: '',
      present3: '',
      past: '',
      future: '',
      participle: '',
      pastParticiple: '',
      isTransitive: false
    };
  }

  addVerb() {
    this.wordService.addVerb(this.newVerb);
    this.newVerb = this.initializeVerb();
  }

}
