// an arry of objects.. how to find object values in an array
function phoneticLookUp(val) {
  var result = "";

  var lookUp = {
    alpha: "Andre",
    bravo: "Boamah",
    charlie: "Charlotte",
    delta: "Doris",
    echo: "Enyonam",
    foxtrot: "Felicia"
  };
  result = lookUp[val];
  return result;
}

console.log(phoneticLookUp("alpha"));

// an array of objects
var myMusic = [
  {
    artist: "Joel Aidoo",
    title: "Gye se",
    release_year: 2018,
    formats: ["CD", "8T", "LP"],
    gold: true
  },
  {
    artist: "Lordina osei",
    title: "Wakwan dooso",
    release_year: 2019,
    formats: "Youtube video"
  }
];

//an array of nested objects .
var myStorage = {
  car: {
    inside: {
      "glove box": "maps",
      "passenger seat": "crumbs"
    },
    outside: {
      trunk: "jack"
    }
  }
};

var gloveBoxContents = myStorage.car.inside["glove box"];
console.log(gloveBoxContents);
