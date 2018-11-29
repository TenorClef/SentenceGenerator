import { Component, OnInit, Input } from '@angular/core';

import { MadLib } from '../shared//madLib';

@Component({
  selector: 'app-display-mad-lib',
  templateUrl: './display-mad-lib.component.html',
  styleUrls: ['./display-mad-lib.component.css']
})
export class DisplayMadLibComponent implements OnInit {

  @Input() madLib: MadLib;

  constructor() { }

  ngOnInit() {
  }

}
