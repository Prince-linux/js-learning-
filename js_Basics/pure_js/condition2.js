function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  } else if (val < 5) {
    return "Less than 5";
  } else {
    return "Between 5 and 10";
  }
}

console.log(testElseIf(11));
