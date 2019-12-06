// A profile lookup program in javascript .. 

var contacts = [

    {
        "firstName": "Prince",
        "lastName": "Boamah",
        "number": "0547616821",
        "likes": ["God", "Music,", "Coding"]
    },
    {
        "firstName": "Doris",
        "lastName": "Boamah",
        "number": "0549092541",
        "likes": ["God", "Music,", "Exercise"]
    },
    {
        "firstName": "Priscilla",
        "lastName": "Boamah",
        "number": "unkonwn",
        "likes": ["Jesus", "Music,", "Pizza"]
    },
    {
        "firstName": "Andre",
        "lastName": "Boamah",
        "number": "unknown",
        "likes": ["God", "Music,", "Coding", "Cartoons"]
    },
    {
        "firstName": "Anita",
        "lastName": "Offei",
        "number": "unknown",
        "likes": ["Money", "Music,", "lies"]
    }
];

function lookUpProfile(name, props) {
    for (var count = 0; count < contacts.length; count++) {
        if (contacts[count].firstName === name) {
            return contacts[count][props] || "No such Property";
        }
    }

    return "No such Contact";

}

var data = lookUpProfile("Doris", "number");

console.log(data);

