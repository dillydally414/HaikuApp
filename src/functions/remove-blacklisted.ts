import AsyncStorage from '@react-native-async-storage/async-storage';

const removeBlacklisted = (text: string, setText: (arg: string) => void): void => {
  let newText: Array<string> = text.split(' ');

  AsyncStorage.getItem('blacklist').then((value) => {
    const blacklistedArray: Array<string> = value ? JSON.parse(value) : [];
    newText = newText.filter((word: string) => !blacklistedArray.includes(word.toLowerCase()));
    setText(newText.join(' '));
  });
};

export default removeBlacklisted;