import { Component, OnInit } from '@angular/core';

import { MadLibService } from '../shared/mad-lib.service';
import { MadLib } from '../shared/madLib';

@Component({
  selector: 'app-prepare-mad-lib',
  templateUrl: './prepare-mad-lib.component.html',
  styleUrls: ['./prepare-mad-lib.component.css']
})
export class PrepareMadLibComponent implements OnInit {

  madLib: MadLib;
  displayMadLib: boolean = false;
  displayForm: boolean = true;

  constructor(private madLibService: MadLibService) { }

  ngOnInit() {
    this.madLibService.getRandomMadLib()
    .subscribe(data => this.madLib = data);
  }

  buildMadLib() {
    var ml = this.madLib;
    var newText: string = ml.fullText;
    ml.replacements.forEach(function(r) {
      var re = new RegExp(r.placeholder, 'g');
      newText = newText.replace(re, r.replacement);
    });
    newText = this.madLibService.capitalizeBeginningOfSentences(newText);
    this.madLib.fullText = newText;
    this.displayForm = false;
    this.displayMadLib = true;
  }

}
