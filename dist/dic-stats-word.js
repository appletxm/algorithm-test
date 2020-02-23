import Dictionary from './Dictionary.js';

function dicStatsWord(string) {
  var dic = new Dictionary();
  var words = string.match(/[^\s]+/g);
  console.info(words);

  words.forEach(function (word) {
    if (dic.find(word)) {
      dic.add(word, dic.find(word) + 1);
    } else {
      dic.add(word, 1);
    }
  });

  dic.showAll();
}

export default dicStatsWord;