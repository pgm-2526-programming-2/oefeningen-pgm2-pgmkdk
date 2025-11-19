function sum(a, b) {
    
    return a + b;

}


// oefening: multiply, division.
    function multiply (a, b) {
    return a * b;

}

    function division (a, b){
    return a / b;

}








//oefening: maak een functie showcalculation die 3 parameters heeft. 2 getallen, en een van onze functie.

function showcalculation (a, b, callback){
    console.log(callback(a, b))
}

    showcalculation(3, 4, sum) 
    showcalculation(1,3,division)
    showcalculation(9, 3, multiply)









// const name = "kobe";
// const division = () => {}
// const multiplier = function() {}

// function selectRandomStudent(arr) {
//     return arr[Math.floor(Math.random() * arr.length)];
// }

// const age = 21;()
// const students = ["yme", "arne", "mert"];

// console.log(sum(age, 12));
// console.log(20); 

// console.log(selectRandomStudent(students));

// function showMessage() {

//     console.log(" answer Checker Message");
// }


// function checkAnswer(answer, solution, callback) {
//     if (answer === solution) {
        
//         callback();
//         return true;
//         }

//     }
//     callback
//         return false;

    


// callback();
// return false;
// }




//checkAnswer("ja", "ja", showMessage);

