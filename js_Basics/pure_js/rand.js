// A program to generate a random number within a range in JavaScript

function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}

var myRandom = randomRange(3, 190);

console.log(myRandom);