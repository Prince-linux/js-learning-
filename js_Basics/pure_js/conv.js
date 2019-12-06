// A program to convert a string into an iinteger

function convertToInteger(str) {
    return parseInt(str);
}

console.log(convertToInteger("176"));


// convert from binary(base 2) to integer(base 10 or decimal)

function convertToInteger(str) {
    return parseInt(str, 2);
}

console.log(convertToInteger("10011"));