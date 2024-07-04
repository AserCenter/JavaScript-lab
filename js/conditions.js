

// ### Comparison and Logical Operators

// - **Comparison Operators:**
//   - `==` Equal to تساوى
//   - `===` Strict equal to (equal value and equal type) تساوى مع النوع
//   - `!=` Not equal to لا تساوى
//   - `!==` Strict not equal to (not equal value or not equal type) لا تساوى
//   - `>` Greater than اكبر من
//   - `<` Less than اقل من
//   - `>=` Greater than or equal to اكبر من او تساوى
//   - `<=` Less than or equal to اقل من او تساوى
// - `%` باقى قسمة
// - **Logical Operators:**
//   - `&&` Logical AND و
//   - `||` Logical OR او
//   - `!` Logical NOT  لا



function operation (num1, num2) {

    // و
    // if(num1 !== num2 && num1 > num2) {
    //     return "not equals , num1 is greater ";
    // }
    // else if(num1 !== num2 && num1 < num2) {
    //     return "not equals , num1 is less ";
    // }

    // or او
    // if(num1 === num2 || num1 == num2){
    //     return "equals";
    // }

    if(!num1){
        return "less";
    }
    else {
        return "greater";
    }
}
console.log("operation", operation(null,5))
console.log("operation", operation(77, 8))
console.log("operation", operation(9, 20))
console.log("operation", operation(5, 5))


// even : زوجى
//odd: فردي
function evenOrodd (num) {

    if(num % 2 === 0) {
        return "num is even";
    }else {
        return "num is odd"
    }
}


console.log(evenOrodd(5))
console.log(evenOrodd(8))
console.log(evenOrodd(16))
console.log(evenOrodd(3))
console.log(evenOrodd(7))
console.log(evenOrodd(9))