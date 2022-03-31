import Filter from 'bad-words';
import badWords from '../constants/bad-words.json';

const typedBadWords = [...badWords] as string[]
const filter = new Filter({ placeHolder: '' });
filter.addWords(...typedBadWords)

const removeBlacklisted = (text: string): string => {
  let newText: Array<string> = text.split(' ');
  newText = newText.filter((word: string) => (!filter.isProfane(word.toLowerCase())));
  return newText.join(' ');
};

export default removeBlacklisted;