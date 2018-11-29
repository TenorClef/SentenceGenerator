import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NounComponent } from './noun/noun.component';
import { VerbComponent } from './verb/verb.component';
import { AdjectiveComponent } from './adjective/adjective.component';
import { AdverbComponent } from './adverb/adverb.component';
import { SentenceGeneratorComponent } from './sentence-generator/sentence-generator.component';
import { PrepareMadLibComponent } from './prepare-mad-lib/prepare-mad-lib.component';
import { DisplayMadLibComponent } from './display-mad-lib/display-mad-lib.component';

@NgModule({
  declarations: [
    AppComponent,
    NounComponent,
    VerbComponent,
    AdjectiveComponent,
    AdverbComponent,
    SentenceGeneratorComponent,
    PrepareMadLibComponent,
    DisplayMadLibComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
