import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NounComponent } from './noun/noun.component';
import { VerbComponent } from './verb/verb.component';
import { AdjectiveComponent } from './adjective/adjective.component';
import { AdverbComponent } from './adverb/adverb.component';
import { SentenceGeneratorComponent }  from './sentence-generator/sentence-generator.component';
import { PrepareMadLibComponent } from './prepare-mad-lib/prepare-mad-lib.component';

const routes: Routes = [
  { path: '', redirectTo: '/sentenceGenerator', pathMatch: 'full' },
  { path: 'nouns', component: NounComponent },
  { path: 'verbs', component: VerbComponent },
  { path: 'adjectives', component: AdjectiveComponent},
  { path: 'adverbs', component: AdverbComponent},
  { path: 'sentenceGenerator', component: SentenceGeneratorComponent },
  { path: 'madLibPrepare', component: PrepareMadLibComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
