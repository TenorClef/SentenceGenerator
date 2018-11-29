import { Component } from '@angular/core';

import { WordService } from './shared/word.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SentenceGenerator';  
  
  constructor(private wordService: WordService) {}
}
