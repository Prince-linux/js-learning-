// Global vs Local Scope in functions
var outerWear = "T-shirt";

function myOutfit() {
  var outerWear = "sweater";
  return outerWear;
}

console.log(myOutfit());
console.log(outerWear);
