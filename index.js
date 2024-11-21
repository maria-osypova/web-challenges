const words = ["Jaws", "Up", "Alien", "Gravity", "Inception", "Psycho"];

function findLongestWord(words) {
  // TODO: return the longest word
  let longestWord = "";
  for (let word of words) {
    //console.log(word);
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}
console.log(findLongestWord(words));

/* 1. create let 
2. forof loop (if -> length -> let = word)
3. return let 
4. console.log
5. Test dif option */
