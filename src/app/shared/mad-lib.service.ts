import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { MadLib } from './madLib';

@Injectable({
  providedIn: 'root'
})
export class MadLibService {

  constructor() { }

  getRandomMadLib(): Observable<MadLib> {
    const amount = MadLibs.length;
    const rand = Math.floor((Math.random() * amount));
    return of(MadLibs[rand]);
  }

  capitalizeBeginningOfSentences(original: string): string {
    var NewString: string = this.fixSentence(original, '. ');
    NewString = this.fixSentence(NewString, '? ');
    NewString = this.fixSentence(NewString, '! ');
    NewString = this.fixSentence(NewString, '. "');

    return NewString;
  }

  private fixSentence(original: string, separator: string) {
    var strSplit = original.split(separator);
    var newString: string = '';
    for (var i = 0; i < strSplit.length; i++) {
      var s = strSplit[i];
      s = s.charAt(0).toUpperCase() + s.slice(1) + separator;
      newString += s;
    }
    var pos = newString.lastIndexOf(separator);
    newString = newString.substring(0, pos);
    return newString;
  }
}

const MadLibs: MadLib[] = [
  {
    originalTitle: 'The Prime of Miss Jean Brodie',
    originalAuthor: 'Muriel Spark',
    penName: '',
    fullText: `<var1> sang:<br />
    O <var2>, <var2>, make my <var3>,<br />
    O make it <var4> and <var5>,<br />
    For my true love <var6> for me today.<br />
    I'll <var7> for him tomorrow.<br /><br />
    Then he looked at <var8>. She was, however, looking at a chipped <var9> of a 
    <var10>. "<var11> must have chipped it," she said. "<var11> was here last 
    Sunday with <var12> and they <var13> together. <var11> must have chipped it."`,
    replacements: [
      {placeholder: '<var1>', description: 'A proper name', replacement: '' },
      {placeholder: '<var2>', description: 'A relation (brother, cousin, etc.)', replacement: '' },
      {placeholder: '<var3>', description: 'An object', replacement: '' },
      {placeholder: '<var4>', description: 'An adjective', replacement: '' },
      {placeholder: '<var5>', description: 'Another adjective', replacement: '' },
      {placeholder: '<var6>', description: 'An intransitive verb (past tense)', replacement: '' },
      {placeholder: '<var7>', description: 'Present tense of the above verb', replacement: '' },
      {placeholder: '<var8>', description: 'A female name', replacement: '' },
      {placeholder: '<var9>', description: 'An object', replacement: '' },
      {placeholder: '<var10>', description: 'An object', replacement: '' },
      {placeholder: '<var11>', description: 'A proper name', replacement: '' },
      {placeholder: '<var12>', description: 'A proper name', replacement: '' },
      {placeholder: '<var13>', description: 'A verb (past tense)', replacement: '' }
  ]
  },
  {
    originalTitle: 'The Two Towers',
    originalAuthor: 'J. R. R. Tolkien',
    penName: '',
    fullText: `But at the moment <var1> was not engaged in <var2>. He needed <var3> and had to humour unwilling <var4>. He was healing <var5> in orc-fashion; and his treatment worked swiftly. When he had forced a drink from his <var6> down the hobbit's throat, cut his leg-bonds, and dragged him to his feet, <var5> stood up, looking pale but <var7> and <var8>, and very much alive. The gash in his <var9> gave him no more trouble, but he bore a brown scar to the end of his days.<br /><br />
    "Hullo, <var10>!" he said. "So you've come on this little expedition, too? Where do we get <var11> and <var12>?"<br /><br />
    "Now then!" said <var1>. "None of that! Hold your tongues. No talk to one another. Any trouble will be reported at the other end, and He'll know how to pay you. You'll get <var11> and <var12> all right: more than you can stomach."<br /><br />
    The orc-band began to descend a narrow ravine leading down into the misty <var13> below. <var5> and <var10>, separated by a dozen Orcs or more, climbed down with them. At the bottom they stepped on to grass, and the hearts of the hobbits rose.<br /><br />
    "Now straight on!" shouted <var1>. "West and a little north. Follow Lugdush."<br /><br />
    "But what are we going to do at sunrise?" said some of the <var14>.<br /><br />
    "Go on <var16>," said <var1>. "What do you think? <var17> on the grass and wait for the Whiteskins to join the <var18>?"<br /><br />
    "But we can"t <var15> in the sunlight."<br /><br />
    "You'll <var15> with me behind you," said <var1>. "<var15>! Or you'll never see your beloved <var19> again. By the White <var20>! What's the use of sending out <var21> on a trip, only half trained? <var15>, curse you! <var15> while night lasts!"`,
    replacements: [
      {placeholder: '<var1>', 'description': 'A proper name (male)', replacement: ''},
      {placeholder: '<var2>', 'description': 'A noun describing an activity', replacement: ''},
      {placeholder: '<var3>', 'description': 'An abstract noun', replacement: ''},
      {placeholder: '<var4>', 'description': 'A noun (plural)', replacement: ''},
      {placeholder: '<var5>', 'description': 'A proper name (male)', replacement: ''},
      {placeholder: '<var6>', 'description': 'An object', replacement: ''},
      {placeholder: '<var7>', 'description': 'An adjective', replacement: ''},
      {placeholder: '<var8>', 'description': 'An adjective', replacement: ''},
      {placeholder: '<var9>', 'description': 'A body part', replacement: ''},
      {placeholder: '<var10>', 'description': 'A proper name', replacement: ''},
      {placeholder: '<var11>', 'description': 'A noun', replacement: ''},
      {placeholder: '<var12>', 'description': 'A noun', replacement: ''},
      {placeholder: '<var13>', 'description': 'A geographical feature', replacement: ''},
      {placeholder: '<var14>', 'description': 'An ethnic or national group', replacement: ''},
      {placeholder: '<var15>', 'description': 'A verb (present)', replacement: ''},
      {placeholder: '<var16>', 'description': 'The present participle of the above verb', replacement: ''},
      {placeholder: '<var17>', 'description': 'A contrasting verb (present)', replacement: ''},
      {placeholder: '<var18>', 'description': 'A noun (event)', replacement: ''},
      {placeholder: '<var19>', 'description': 'A noun (plural)', replacement: ''},
      {placeholder: '<var20>', 'description': 'A body part', replacement: ''},
      {placeholder: '<var21>', 'description': 'A noun (plural)', replacement: ''}
    ]
  },
  {
    originalTitle: 'Carpe Jugulum',
    originalAuthor: 'Terry Pratchett',
    penName: '',
    fullText: `Millie Chillum carefully handed the baby to the priest, who held it <var1>.<br /><br />
    It seemed to the royal couple that he suddenly started to speak very <var2>. Behind him, <var4>'s was an expression of extreme <var3> that was nevertheless made up of one hundred per cent artificial additives. They also had the impression that the poor man was suffering from frequent attacks of cramp.<br /><br />    
    "-we are gathered here together in the sight of... um... one another..."<br /><br />    
    "Are you all right, Reverend?" said the King, leaning forward.<br /><br />    
    "Never better, sir, um, I assure you," said Oats miserably, "... and I therefore name thee... that is, you.. ."<br /><br />    
    There was a deep, horrible pause.<br /><br />    
    Glassy faced, the priest handed the baby to Millie. Then he removed his <var7>, took a small scrap of paper from the lining, read it, moved his lips a few times as he said the words to himself, and then replaced the <var7> on his sweating <var8> and took the baby again.<br /><br />    
    "I name you... <var5> Margaret Note Spelling of <var6>!"<br /><br />    
    The shocked silence was suddenly filled.<br /><br />    
    "Note Spelling?" said <var9> and <var10> together.<br /><br />    
    "<var5>?" said <var4>.<br /><br />    
    The baby opened her eyes.<br /><br />    
    And the doors swung back.`,
    replacements: [
      { placeholder: '<var1>', description: 'An adverb', replacement: '' },
      { placeholder: '<var2>', description: 'Another adverb', replacement: '' },
      { placeholder: '<var3>', description: 'An abstract noun', replacement: '' },
      { placeholder: '<var4>', description: 'A proper name', replacement: '' },
      { placeholder: '<var5>', description: 'A proper name (female)', replacement: '' },
      { placeholder: '<var6>', description: 'A region (country, city, province...)', replacement: '' },
      { placeholder: '<var7>', description: 'An article of clothing', replacement: '' },
      { placeholder: '<var8>', description: 'A body part', replacement: '' },
      { placeholder: '<var9>', description: 'A proper name', replacement: '' },
      { placeholder: '<var10>', description: 'A proper name', replacement: '' }
    ]
  },
  {
    originalTitle: 'The Merchant of Venice',
    originalAuthor: 'William Shakespeare',
    penName: '',
    fullText: `The quality of mercy is not <var1>;<br /
    It droppeth as the <var2> rain from <var3><br />  
    Upon the place beneath. It is twice <var4>;<br />  
    It <var5> him that <var6> and him that <var7>:<br /> 
    'Tis <var8> in the <var8>; it becomes<br />  
    The <var9> <var10> better than his <var11>:<br /   
    His <var12> shows the force of temporal power,<br />   
    The attribute to <var13> and <var14>,<br />  
    Wherein doth sit the <var15> and <var16> of kings;<br />   
    But mercy is above this sceptred sway;<br />   
    It is enthronèd in the hearts of kings,<br />  
    It is an attribute to <var17> himself;<br />
    And earthly <var18> doth then show likest <var17>'s<br />
    When mercy seasons justice. Therefore, <var19>, <br />
    Though <var20> be thy plea, consider this,<br /> 
    That, in the course of <var20>, none of us<br />
    Should see salvation: we do pray for mercy;`,
    replacements: [
      { placeholder: '<var1>', description: 'Past participle of a verb', replacement: '' },
      { placeholder: '<var2>', description: 'Adjective', replacement: '' },
      { placeholder: '<var3>', description: 'A place', replacement: '' },
      { placeholder: '<var4>', description: 'An adjective', replacement: '' },
      { placeholder: '<var5>', description: 'Present 3rd person singular transitive verb', replacement: '' },
      { placeholder: '<var6>', description: 'Present 3rd person singular verb', replacement: '' },
      { placeholder: '<var7>', description: 'Present 3rd person singular verb', replacement: '' },
      { placeholder: '<var8>', description: 'A superlative adjective (e.g. "best", "strongest")', replacement: '' },
      { placeholder: '<var9>', description: 'An adjective', replacement: '' },
      { placeholder: '<var10>', description: 'A noun', replacement: '' },
      { placeholder: '<var11>', description: 'A noun', replacement: '' },
      { placeholder: '<var12>', description: 'A noun', replacement: '' },
      { placeholder: '<var13>', description: 'An abstract noun', replacement: '' },
      { placeholder: '<var14>', description: 'An abstract noun', replacement: '' },
      { placeholder: '<var15>', description: 'An abstract noun', replacement: '' },
      { placeholder: '<var16>', description: 'An abstract noun', replacement: '' },
      { placeholder: '<var17>', description: 'A name (male)', replacement: '' },
      { placeholder: '<var18>', description: 'An abstract noun', replacement: '' },
      { placeholder: '<var19>', description: 'A member of a nationality or ethnic group (e.g. "Canadian")', replacement: '' },
      { placeholder: '<var20>', description: 'An abstract noun', replacement: '' }
    ]
  }
];
