var myArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [[10, 11, 12], 13, 14]];

var myData = myArray[3][0][1];

//console.log(myData);

myArray.push([15, 15, 17]);

console.log(myArray);

//var removedFromMyArray = myArray.pop();
var removedFromMyArray = myArray.shift();
console.log(myArray);
console.log(removedFromMyArray);

myArray.unshift([0, 0, 0]);
console.log(myArray);
