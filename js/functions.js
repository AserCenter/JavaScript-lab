// global variable
let y = 22;


// name: camelCase
// parameters (num1)
function sumNumbers(num1, num2, num3) {
    let total = num1 + num2 + num3;
    console.log(num1 + num2 + num3);
    // let mm = "#ff ffff"
    // return mm.length;

    let hash = "#"
    return hash.repeat(20);
}

let myValue = sumNumbers(8, 2, 1);

console.log(myValue);
// call function
sumNumbers(8, 2,1);



document.getElementById("h2").innerHTML = myValue;


// sumNumbers(2, 2,2);
// sumNumbers(3, 4,2);



