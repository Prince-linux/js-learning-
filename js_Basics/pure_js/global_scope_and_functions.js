//global scope and functions
var myGlobal = 10;

function func1() {
  var oopsGlobal = 5;
}

function func2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
func1();
func2();
