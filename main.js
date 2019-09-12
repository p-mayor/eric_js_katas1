function sum(a,b){
    return a+b
}

console.log(sum(5, 9)); // return 14
console.log(sum(5, 4)); // return 9

function avg(a,b,c){
    return (a+b+c)/3
}

console.log(avg(1, 5, 9)); // returns 5
console.log(avg(4, 4, 4)); // returns 4
console.log(avg(10, 4, 1)); // returns 5

function greaterThan(a,b){
    return b > a
}

console.log(greaterThan(5, 6)); // returns true
console.log(greaterThan(4, 1)); // returns false

function secondLargest(arr){
    console.log(arr.sort(function(a, b){return b - a}))
    return arr.sort(function(a, b){return b - a})[1]
}

console.log(secondLargest([1, 4, 5, 8])); // returns 5
console.log(secondLargest([8, 3, 5, 1, 9, 10])); // returns 9