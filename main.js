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

function tip(bill) {
  return Math.ceil(bill * 0.2);
}

console.log(tip(57));
console.log(tip(32));

function multiples(a, b) {
  let resultArray = [];
  for (let i = 1; i <= 100; i++) {
    if ((i % a === 0) & (i % b === 0)) {
      resultArray.push(i);
    }
  }
  return resultArray;
}

console.log(multiples(3, 5));
console.log(multiples(7, 12));

function blackjack(cardArray) {
  let total = 0;
  let faceCards = ["J", "Q", "K"];
  let ace = "A";
  let includesAce = false;
  for (let i = 0; i < cardArray.length; i++) {
    if (faceCards.includes(cardArray[i])) {
      total += 10;
    } else if (cardArray[i] === ace) {
      total += 11;
      includesAce = true;
    } else {
      total += cardArray[i];
    }
  }
  if (includesAce && total > 21) {
    total -= 10;
  }
  return total;
}

console.log(blackjack(["J", 3, 4, 5, 6]));
console.log(blackjack(["J", "Q", "A"]));
console.log(blackjack(["J", 3, 4, "A"]));
console.log(blackjack(["K", "A"]));

function divisors(a){
  let resultArray = []
  for(let i = 0; i <=a; i++){
    if(a%i===0){
      resultArray.push(i)
    }
  }
  return resultArray
}

console.log(divisors(9)) // returns [1, 3, 9]
console.log(divisors(17)) // returns [1, 17]
console.log(divisors(92)) // returns [1, 2, 4, 23, 46, 92]

function hamming(str1,str2){
  if(str1.length !== str2.length){
    return false
  } else {
    let sameLetterCount = 0
    for(let i =0; i < str1.length; i++){
      if(str1[i]===str2[i]){
        sameLetterCount++
      }
    }
    return sameLetterCount
  }
}

console.log(hamming('yatin','thang'))
console.log(hamming('hello','hello'))
console.log(hamming('hello','hewwo'))
console.log(hamming('hello','helloo'))

function pokemon(arr){
  let resultArray = []
  for(let i = 0; i < arr.length; i++){
    let count = 0
    for(let j = 0; j <= i; j++){
      count += arr[j]
      resultArray[i] = count
    }
  }
  return resultArray
}

console.log(pokemon([1,2,5,1,3]))

function find(arr, n){
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === n){
      return i
    }
  }
  return 'Not found'
}

console.log(find([1,2,3,4], 3))
console.log(find([4,4,4,4], 4))
console.log(find([1,2,2,4], 3))

function map(arr, func){
  let resultArray = []
  for(let i = 0; i< arr.length;i++){
    resultArray[i] = func(arr[i])
  }
  return resultArray
}

console.log(map([1,2,3],function(a){return a}))
console.log(map([3,2,1],function(a){return a+2}))
console.log(map([0,2,4],function(a){return a*4}))

function filter(arr, func){
  let resultArray = []
  for(let i = 0; i< arr.length;i++){
    if(func(arr[i])){
      resultArray.push(arr[i])
    }
  }
  return resultArray
}

console.log(filter([1,2,3,4], function(a){return a%2===0}))
console.log(filter([1,2,3,4], function(a){return a%2===1}))

function sprint(arr){
  let fastestObj = {}
  for (let i = 0; i < arr.length; i++){
    if(arr[i].time<fastestObj.time || fastestObj.time === undefined){
      fastestObj = arr[i]
    }
  }
  return fastestObj.name
}

console.log(sprint([{'name':'jo','time':1},{'name':'job','time':2},{'name':'jon','time':3}]))

function scrabble(str, obj){
  let points = 0
  for(let i = 0; i<str.length; i++){
    points += obj[str[i]]
  }
  return points
}

console.log(scrabble('abc',{'a':1,'b':2,'c':3}))
console.log(scrabble('banana',{'a':1,'b':2,'n':3}))