// A simple card game in javascript..

var count = 0;

function cc(card) {
  switch (card) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case "Q":
    case "K":
    case "J":
    case "A":
      count--;
      break;
  }
  var holdbet = "Hold";
  if (count > 0) {
    holdbet = "Bet";
  }
  return count + " " + holdbet;
}

cc(2);
cc(3);
cc(7);
cc("K");
cc("A");
console.log(cc(4));
