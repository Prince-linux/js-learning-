// A simple case use of switch statements

function caseInSwitch(val) {
  var answer = "";
  switch (val) {
    case 1:
      answer = "Alpha";
      break;
    case 2:
      answer = "Beta";
      break;
    case 3:
      answer = " Gamma";
      break;
    case 4:
      answer = "Delta";
      break;
    default:
      answer = "Please type in a number between 1 to 4";
      break;
  }
  return answer;
}

console.log(caseInSwitch(1));
