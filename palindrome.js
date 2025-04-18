// palindrome - a word, phrase, or sequence that reads the same backwards as forwards

function isPalindrome(string) {
  string = string.toLowerCase().replace(/\s/g, '');
  let result = true;
  for (let i=0; i<string.length; i++) {
    if(string[i] !== string[string.length -(i+1)]) {
      result = false;
      break;
    }
  };
  return result;
};

console.log('is palindrome?', isPalindrome('racecar'));
