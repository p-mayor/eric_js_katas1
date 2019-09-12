function sum(a, b) {
  return a + b;
}

console.log(sum(5, 9)); // return 14
console.log(sum(5, 4)); // return 9

function avg(a, b, c) {
  return (a + b + c) / 3;
}

console.log(avg(1, 5, 9)); // returns 5
console.log(avg(4, 4, 4)); // returns 4
console.log(avg(10, 4, 1)); // returns 5

function greaterThan(a, b) {
  return b > a;
}

console.log(greaterThan(5, 6)); // returns true
console.log(greaterThan(4, 1)); // returns false

function secondLargest(arr) {
  console.log(
    arr.sort(function(a, b) {
      return b - a;
    })
  );
  return arr.sort(function(a, b) {
    return b - a;
  })[1];
}

console.log(secondLargest([1, 4, 5, 8])); // returns 5
console.log(secondLargest([8, 3, 5, 1, 9, 10])); // returns 9

function containsVowel(word) {
  let vowels = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < vowels.length; i++) {
    if (word.includes(vowels[i])) {
      return true;
    }
  }
  return false;
}

console.log(containsVowel("alpha")); // returns true
console.log(containsVowel("hmph")); // returns false

function piglatin(str) {
  let wordArray = str.split(" ");
  for (let i = 0; i < wordArray.length; i++) {
    let firstLetter = wordArray[i][0];
    let remainingLetters = wordArray[i].slice(1);
    let pigWord = remainingLetters + firstLetter + "ay";
    wordArray[i] = pigWord;
  }
  return wordArray.join(" ");
}

console.log(piglatin("good day")); // returns 'oodgay ayday'
console.log(piglatin("come now")); // returns 'omecay ownay'

function longestWord(str) {
  let wordArray = str.split(" ");
  return wordArray.sort(function(a, b) {
    return b.length - a.length;
  })[0];
}

console.log(longestWord("have you ever seen a penguin go to tea?")); // returns 'penguin'
console.log(
  longestWord("fool me once, shame on me. fool me twice, shame on heathcliff")
); // returns 'heathcliff'

function weave(str, n) {
  let strArray = str.split("");
  for (let i = n - 1; i < str.length; i += n) {
    strArray[i] = "x";
  }
  return strArray.join("");
}

console.log(weave("hi how are you", 2)); // returns 'hx xox xrx xox'
console.log(weave("im terrible, go away", 5)); // returns 'im txrribxe, gx awax'

