const firstName = "jan";  //primitief

const age = 20;  //primitief

const isStudent =true;   //primitief

const hobbies = ["gaming", "soccer"];  // samengesteld of reference type

const address = {
    street: "New York Straat",
    number: 4
}   // Samengesteld of reference


let nickname = firstName
const interests = hobbies;
const todos = interests


nickname = "GamerBoy";
interests.push("kitesurfen");

console.log(interests, hobbies, todos);


let total = 0;

function addFiveToNumber(a) {
    total = a + 5;
    console.log(a + 5);
}


addFiveToNumber(2)

console.log("totaal:", total);


function doubleNumber(num){

    num = num * 2;
    console.log("binnen functie: ", num)

}

function doubleNumberWithReference(obj) {
    obj.number = obj.number * 2
    console.log("binnen ref-functie:", )
}

let originalNumber = 5;
let originalNumberAsreferencetype ={
    number: 5
}

doubleNumber(originalNumber);
doubleNumberWithReference(originalNumberAsreferencetype)
console.log("original number uit functie", originalNumber);
console.log("")