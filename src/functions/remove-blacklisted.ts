import AsyncStorage from '@react-native-async-storage/async-storage';

const removeBlacklisted = (text: string, setText: (arg: string) => void): void => {
  let newText = text;

  AsyncStorage.getItem('blacklist').then((value) => {
    const blacklistedArray: Array<string> = value ? JSON.parse(value) : [];
    blacklistedArray.forEach((badWord) => {
      newText = newText.replace(badWord, '');
    });
    setText(newText);
  });
};

export default removeBlacklisted;