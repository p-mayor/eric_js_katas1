- Create a directory containing an `index.html` file and a `main.js` file. 
- Add the boilerplate html5 to the `index.html` file. 
- Link the `main.js` file to your `index.html` with a script tag.
- Write the following functions in the `main.js` file
- Use `console.log()` to display the results

## `01 | sum`

Write a function called `sum` that takes two parameters and returns the sum of those 2 numbers.

```js
sum(5, 9); // return 14
sum(5, 4); // return 9
```

Note: to test this, use `console.log(sum(5,9))` then open your index.html file in your browser and check the console.

## `02 | avg`

Write a function named `avg` that takes 3 parameters and returns the average of those 3 numbers.

```js
avg(1, 5, 9); // returns 5
avg(4, 4, 4); // returns 4
avg(10, 4, 1); // returns 5
```

## `03 | greaterThan`

Write a function called `greaterThan` that takes two parameters and returns `true` if the second parameter is greater than the first. Otherwise the function should return `false`.

```js
greaterThan(5, 6); // returns true
greaterThan(4, 1); // returns false
```

## `04 | secondLargest`

Write a function called `secondLargest` that takes an array and returns the *second* largest number. Hint: this is similar to one of the problems you did yesterday.

```js
secondLargest([1, 4, 5, 8]); // returns 5
secondLargest([8, 3, 5, 1, 9, 10]); // returns 9
```

## `05 | containsVowel`

Write a function called `containsVowel` that takes a single string and returns true if there is at least one value or false otherwise.

```js
containsVowel('alpha'); // returns true
containsVowel('hmph'); // returns false
```

## `06 | piglatin`

Write a function called `piglatin` that takes a single string and returns the piglatin version of that string.

Hint: look into the `split()` function that you can call on strings.

```js
piglatin('good day'); // returns 'oodgay ayday'
piglatin('come now'); // returns 'omecay ownay'
```


## `07 | longestWord`

Write a function called `longestWord` that takes a single string and returns the longest word in the string.

Hint: look into the `split()` function that you can call on strings.


```js
longestWord('have you ever seen a penguin go to tea?'); // returns 'penguin'
longestWord('fool me once, shame on me. fool me twice, shame on heathcliff'); // returns 'heathcliff'
```

# Hard mode

## `08 | weave`

Write a function called `weave` that accepts an input string, `str`, and a number, 'n'. The function should return the string with every nth character replaced with an 'x'.

```js
weave('hi how are you', 2) // returns 'hx xox xrx xox'
weave('im terrible, go away', 5) // returns 'im txrribxe, gx awax'
```

## `09 | tip`

Jeb eats out at restaurants all the time but is horrible at math. He decides to write a function called `tip` that accepts a single parameter (the cost of the meal), and should return the tip Jeb should give his waiter. Jeb uses two rules to calculate tips:

- First he always tips 20% on the original bill.
- He then rounds up to the nearest dollar. For example, if the total with tip is $22.78, he'd round up to $23.00.

```js
tip(57) // returns 12
tip(32) // returns 7
```

## `10 | multiples`

Write a function called `multiples` that accepts two numbers and returns an array of all numbers from 1 - 100 that are evenly divisible by both.

```js
multiples(3,5) // returns [15, 30, 45, 60, 75, 90]
multiples(7,12) // returns [84]
```

## `11 | blackjack`

Write a function called `blackjack` that accepts an array containing a hand of cards represented by the digits 2 - 9 and the values J, Q, K, and A. Return true if the hand busts (the value of the cards is > 21) or false if it hasn't busted.

According to the rules of blackjack, an ace can be worth either 1 or 11. You should make it 11 unless that causes the hand to bust, in which case it should be 1 (just like if you play in person).

```js
blackjack(['J', 3, 4, 5, 6]) // returns 28
blackjack(['J', 'Q', 'A']) // returns 21
blackjack(['J', 3, 4, 'A']) // returns 18
blackjack(['K', 'A']) // returns 21
```

## `12 | divisors`

Write a function called `divisors` that accepts a number and returns an array of all of the numbers that divide evnely into it.

```js
divisors(9) // returns [1, 3, 9]
divisors(17) // returns [1, 17]
divisors(92) // returns [1, 2, 4, 23, 46, 92]
```

## `13 | hamming`

Write a function called `hamming` that accepts two strings. If the lengths of the strings are not equal, the function should return `false`. Otherwise, return the number of letters that are in the same position in both words.

```js
hamming('yatin','thang') // returns 0
hamming('hello','hello') // returns 5
hamming('hello','hewwo') // returns 3
hamming('hello','helloo') // returns false
```

## `14 | pokemon`

Write a function called `pokemon` that accepts an array of numbers. Each element in the array represents a day, and the number represents the number of Pokemon caught on that day. Return an array of the same length that contains *the number of total Pokemon caught up to that day*.

For example,

```js
pokemon([1, 2, 5, 1, 3]); // returns [1, 3, 8, 9, 12]
```

## `15 | find`

Write a function called `find` that accepts two parameters: the first is an array of numbers and the second is a single number. Return the index of the first time you find the second parameter in the first parameter. If the number is not in the array, return 'Not found'

```js
find([1,2,3,4], 3) // returns 2
find([4,4,4,4], 4) // returns 0
find([1,2,2,4], 3) // returns 'Not found'
```

## Nightmare mode

### `16 | map`

Write a function called `map` that accepts an array and a function as arguments. You should return an array containing the values of the array after the function has been applied to each one.

Note: there is a built-in function called map. You can't use that ;-)

```js
map([1,2,3],function(a){return a}) // returns [1, 2, 3]
map([3,2,1],function(a){return a+2}) // returns [5, 4, 3]
map([0,2,4],function(a){return a*4}) // returns [0, 8, 16]
```

### `17 | filter`

Write a function called `filter` that accepts an array and a function as arguments. You should return an array containing the values of the array that return `true` after the function is applied.

```js
filter([1,2,3,4], function(a){return a%2===0}) // returns [2, 4]
filter([1,2,3,4], function(a){return a%2===1}) // returns [1, 3]
```

## `18 | sprint`

Write a function called `sprint` that accepts a single array of objects representing Olympic sprinters, each which has a `name` (string) and `time` (in seconds, so a number). Return the *name* of the athlete with the fastest time.

```js
sprint([{'name':'jo','time':1},{'name':'job','time':2},{'name':'jon','time':3}]) // returns 'jo'
```


## `19 | scrabble`

Write a function called `scrabble` that accepts a string and an object containing a property for each letter and a value representing the number of scrabble points its worth. Return the number of points that the whole word is worth.

Hint: strings have a `split()` function that might be useful.

```js
scrabble('abc',{'a':1,'b':2,'c':3}) // returns 6
scrabble('banana',{'a':1,'b':2,'n':3}) // returns 11
```