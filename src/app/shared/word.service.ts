import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Noun } from './noun';
import { Verb } from './verb';

@Injectable({
  providedIn: 'root'
})
export class WordService {

  public nouns: Noun[];
  public verbs: Verb[];
  public adjectives: string[];
  public adverbs: string[];

  constructor(private http: HttpClient) {
    this.nouns = nouns;
    this.verbs = verbs;
    this.adjectives = adjectives;
    this.adverbs = adverbs;
   }

  getAllNouns(): Observable<Noun[]> {
    return of(this.nouns);
  }

  addNoun(noun: Noun) {
    this.nouns.push(noun);
  }

  getRandomNoun(): Noun {
    const amount = this.nouns.length;
    const rand = Math.floor((Math.random() * amount));
    // console.dir('noun' + rand);
    // console.dir(nouns[rand]);
    return this.nouns[rand];    
  }

  addVerb(v: Verb) {
    this.verbs.push(v);
  }

  getRandomVerb(): Verb {
    const amount = this.verbs.length;
    const rand = Math.floor((Math.random() * amount));
    // console.dir('verb ' + rand);
    // console.dir(verbs[rand]);
    return verbs[rand]; 
  }

  addAdjective(adj: string) {
    this.adjectives.push(adj);
  }

  getRandomAdjective(): string {
    const amount = this.adjectives.length;
    const rand = Math.floor((Math.random() * amount));
    //console.dir('adjective ' + rand);
    return this.adjectives[rand];
  }

  addAdverb(adv: string) {
    this.adverbs.push(adv);
  }

  getRandomAdverb(): string {
    const amount = this.adverbs.length;
    const rand = Math.floor((Math.random() * amount));
    //console.dir('adverb ' + rand);
    return adverbs[rand];
  }

  getRandomTemplate(): string {
    const amount = templates.length;
    const rand = Math.floor((Math.random() * amount));
    return templates[rand];
  }

  generateSentence(): string {
    var sentence = this.getRandomTemplate();
    sentence = this.doReplacements(sentence);

    if(sentence.indexOf('[') > -1 && sentence.indexOf(']') > sentence.indexOf('[')) {
      sentence = this.doReplacements(sentence);
    }

    return sentence;
  }

  private doReplacements(sentence: string) {
    sentence = sentence.replace('[nsingular]', this.getRandomNoun().singular);
    sentence = sentence.replace('[nplural]', this.getRandomNoun().plural);
    // sentence = sentence.replace('[vpresent1]', this.getRandomVerb().present1);
    // sentence = sentence.replace('[vpresent3]', this.getRandomVerb().present3);
    sentence = this.dealWithVerbs(sentence);
    sentence = sentence.replace('[vpast]', this.getRandomVerb().past);
    sentence = sentence.replace('[adj]', this.getRandomAdjective());
    sentence = sentence.replace('[adv]', this.getRandomAdverb());
    sentence = sentence.replace('[vpastpart]', this.getRandomVerb().pastParticiple);
    sentence = sentence.replace('[vpart]', this.getRandomVerb().participle)

    sentence = this.dealWithIndefiniteArticles(sentence);
    sentence = this.initialUpperCase(sentence);
    return sentence;
  }

  private dealWithVerbs(sentence: string): string {
    // if transitive, add an object
    const v = this.getRandomVerb();
    if(v.isTransitive) {
      sentence = sentence.replace('[vpresent1]', v.present1 + this.dealWithTransitiveVerbs());
      sentence = sentence.replace('[vpresent3]', v.present3 + this.dealWithTransitiveVerbs());
      sentence = sentence.replace('[vpast]', v.past + this.dealWithTransitiveVerbs());
    } else {
      sentence = sentence.replace('[vpresent1]', v.present1);
      sentence = sentence.replace('[vpresent3]', v.present3);
    }
    return sentence;    
  }

  private dealWithTransitiveVerbs(): string {
    // Get needed random boolean values
    const isPlural = Math.random() >= 0.5;
    const isDefinite = Math.random() >= 0.5;

    // Build the objective clause with these values and a random noun
    var clause: string = '';
    if(isPlural) {
      if(isDefinite) {
        clause = ' all the ' + this.getRandomNoun().plural;
      } else {
        clause = ' some ' + this.getRandomNoun().plural;
      }
    } else {
      // singular
      if(isDefinite) {
        clause = ' the ' + this.getRandomNoun().singular;
      } else {
        clause = ' a ' + this.getRandomNoun().singular;
      }
    }
    return clause;
  }

  private dealWithIndefiniteArticles(sentence: string): string {
    const vowels: string[] = ['a', 'e', 'i', 'o', 'u'];
    var pattern = / a [aeiou]/gi;
    var match = sentence.search(pattern);
    if(match > -1) {
      sentence = sentence.substr(0, match) + ' an ' + sentence.substr(match + 3);
    }
    return sentence;
  }

  private initialUpperCase(s: string): string {
    return s[0].toUpperCase() + s.substring(1);
  }
}


const nouns: Noun[] = [
  { singular: 'cat', plural: 'cats' },
  { singular: 'computer', plural: 'computers' },
  { singular: 'aubergine', plural: 'aubergines' },
  { singular: 'credit card', plural: 'credit cards' },
  { singular: 'mistake', plural: 'mistakes' },
  { singular: 'possibility', plural: 'possibilities' },
  { singular: 'meal', plural: 'meals' },
  { singular: 'tree', plural: 'trees' },
  { singular: 'trouble', plural: 'troubles' },
  { singular: 'mobile phone', plural: 'mobile phones' },
  { singular: 'disappearance', plural: 'disappearances' },
  { singular: 'historical site', plural: 'historical sites' },
  { singular: 'discovery', plural: 'discoveries' },
  { singular: 'trombone', plural: 'trombones' },
  { singular: 'problem', plural: 'problems' }
];

const verbs: Verb[] = [
  { present1: 'walk', present3: 'walks', past: 'walked', 'future': 'will walk', participle: 'walking', pastParticiple: 'walked', isTransitive: false },
  { present1: 'make', present3: 'makes', past: 'made', future: 'will make', participle: 'making', pastParticiple: 'made' , isTransitive: true },
  { present1: 'vanish', present3: 'vanishes', past: 'vanished', future: 'will vanish', participle: 'vanishing', pastParticiple: 'vanished', isTransitive: false },
  { present1: 'do', present3: 'does', past: 'did', future: 'will do', participle: 'doing', pastParticiple: 'done', isTransitive: true },
  { present1: 'reach', present3: 'reaches', past: 'reached', future: 'will reach', participle: 'reaching', pastParticiple: 'reached', isTransitive: true },
  { present1: 'mess up', present3: 'messes up', past: 'messed up', future: 'will mess up', participle: 'messing up', pastParticiple: 'messed up', isTransitive: false },
  { present1: 'observe', present3: 'observes', past: 'observed', future: 'will observe', participle: 'observing', pastParticiple: 'observed', isTransitive: true },
  { present1: 'take', present3: 'takes', past: 'took', future: 'will take', participle: 'taking', pastParticiple: 'taken', isTransitive: true },
  { present1: 'break', present3: 'breaks', past: 'broke', future: 'will break', participle: 'braking', pastParticiple: 'broken', isTransitive: true },
  { present1: 'find', present3: 'finds', past: 'found', future: 'will find', participle: 'finding', pastParticiple: 'found', isTransitive: true },
  { present1: 'pick up', present3: 'picks up', past: 'picked up', future: 'will pick up', participle: 'picking up', pastParticiple: 'picked up', isTransitive: true },
  { present1: 'fall', present3: 'falls', past: 'fell', future: 'will fall', participle: 'falling', pastParticiple: 'fallen', isTransitive: false },
  { present1: 'represent', present3: 'represents', past: 'represented', future: 'will represent', participle: 'representing', pastParticiple: 'represented', isTransitive: true }
];

const adverbs: string[] = [
  'never',
  'blissfully',
  'finally',
  'brightly',
  'upwardly',
  'sternly',
  'effectively',
  'unnaturally',
  'calmly',
  'scarcely',
  'unfortunately',
  'incredibly',
  'infrequently',
  'really',
  'financially',
  'presently'
];

const adjectives: string[] = [
  'frightening',
  'mischievous',
  'effective',
  'annoying',
  'present',
  'infinite',
  'intrinsic',
  'first',
  'last',
  'potential',
  'optimistic',
  'green',
  'infantile'
];

const templates = [
  'I [vpast] in a [adj] [nsingular].',
  '[adv] do we [vpresent1]',
  'You\'re [vpastpart]!',
  'Have you [vpastpart] the [nsingular] in a [adj] fashion?',
  'When will she [vpresent1]?',
  'In more [adj] times, they [vpast].',
  'He didn\'t [vpresent1].',
  'Uh - oh... we\'ve been [vpastpart].',
  'It wouldn\'t be [adj] if there were no [nplural].',
  'If only the [nplural] would [vpresent1] in the [nsingular].',
  'On Tuesdays, he gives the [nplural] to the [adj] [nsingular].',
  'He [adv] [vpresent3] with the [nplural].',
  'They [vpresent1] [adv] when the [nsingular] [vpresent3].',
  'Do they [vpresent1] whenever the [nsingular] [vpresent3]?',
  'Never mind the [nplural]; they won\'t [vpresent1].',
  'It\'s [adv] [adj].',
  'Come not between the [nsingular] and its [nsingular].',
  'It seems like only yesterday that we [adv] [vpast].',
  'If only we had [vpast] when the [nplural] were [vpart].'
];