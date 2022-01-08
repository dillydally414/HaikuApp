const diphthongs: Array<string> = ['ai', 'ay', 'au', 'ea', 'ee', 'ey', 'ie', 'oi', 'oo', 'ou', 'oy'];

const vowels: Array<string> = ['a', 'e', 'i', 'o', 'u', 'y'];

const syllables = (word: string): number => {
  if (word.length === 0) return 0;
  word = word.toLowerCase();
  let syllables: number = 0;
  if (word.endsWith('e') && !word.endsWith('le')) {
    syllables--;
  }
  vowels.forEach((vowel: string) => {
    const matched: null | RegExpMatchArray = word.match(new RegExp(vowel, 'g'));
    syllables += matched ? matched.length : 0;
  });
  diphthongs.forEach((diphthong: string) => {
    const matched: null | RegExpMatchArray = word.match(new RegExp(diphthong, 'g'));
    syllables -= matched ? matched.length : 0;
  });
  return Math.max(1, syllables);
}

const countSyllables = (text: string): number => {
  const words: Array<string> = text.trim().split(' ');
  return words.reduce((soFar: number, curr: string) => { return soFar + syllables(curr) }, 0);
}

export default countSyllables;