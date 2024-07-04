// global variable
let y = 22;


// name: camelCase
// parameters (num1)
function sumNumbers(num1, num2, num3) {
    let total = num1 + num2 + num3;
    // console.log(num1 + num2 + num3);
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
sumNumbers(2, 2,2);
sumNumbers(3, 4,2);


function multipyNums(num1, num2, num3) {

    console.log(num1)
    console.log(num2)
    console.log(num3)

    return num1 * num2 * num3;
    console.log("ignore here !!!!!",num1 * num2 * num3);

}

// = assign value
// == compare values without type  تقارن القيم بدون النوع
// === تقارن القيم والنوع معا



function nonPara () {
    return 5 === 2;
}
console.log("my nonPara: ", nonPara())


// call function
console.log("call function: "+ multipyNums(2, 1, 4));

let multipyNumsValue =  multipyNums(2, 2,3);

console.log("my value: ", multipyNumsValue)

document.getElementById("h2").innerHTML = multipyNums(2, 1, 4);



// function evenOrOdd (num) {

//     if(num % 2 === 0) {
//         return "even"
//     }else {
//         return "odd"
//     }
// }

// console.log(evenOrOdd(2));
// console.log(evenOrOdd(4));
// console.log(evenOrOdd(8));
// console.log(evenOrOdd(3));
// console.log(evenOrOdd(5));
// console.log(evenOrOdd(7));
