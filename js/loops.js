let repeate = 3;
// طريقة مختصرة لزيادة قيمة المتغير:

repeate = repeate + 2
repeate++
repeate += 2
repeate--



/*
1 true --> do 
3 true --> do 
5 true --> do 
7 false --> don't do anything
 */
for (let repeate = 1; repeate <= 5; repeate += 2) {
    console.log(repeate);

}


/*
0
1
2
3
4
5 false
*/
for (let i = 0; i <= 100; i += 2) {
    console.log("Sandy")
}


/**
 1 +3 
 4 + 3
 
 */
for (let counter = 1; counter < 6; counter += 3) {
    console.log("counter:", counter);
}



let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNumbers = [];
let oddNumbers = [];
console.log(numbers.length)
console.log(9 < numbers.length)


/*
numbers[0] --> numbers[0]  true
numbers[1] --> -  false
numbers[2] --> numbers[2]  true
.......
numbers[9] --> -  false
numbers[10] --> 
*/

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 1) {
        oddNumbers.push(numbers[i])
    }
}

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        evenNumbers.push(numbers[i]);
    }
}
// ************************************

// ###  `while` Loop
// The `while` loop repeats a block of code as long as a specified condition is true.
// تنفذ كود معين طالما الشرط متحقق

// **Syntax:**
// while (condition) {
//     // code to be executed
// }
// ```

// **Example:**
let i = 0;
while (i < 5) {
    console.log("The number is " + i);
    i++;
}
// Output:
// The number is 0
// The number is 1
// The number is 2
// The number is 3
// The number is 4
// ```

// ###  `do...while` Loop
// The `do...while` loop is similar to the `while` loop,
//  but it will always execute the block of code once before checking the condition.
// تنفذ كود معين طالما الشرط متحقق
//  هتتفذ مرة واحدة اول مرة حتي لو متحققش الشرط وبعدها تفحص الشرط

// **Syntax:**
// do {
//     // code to be executed
// } while (condition);
// ```

// **Example:**
let p = 0;
do {
    console.log("The number is " + p);
    p++;
} while (i < 5);
// Output:
// The number is 0
// The number is 1
// The number is 2
// The number is 3
// The number is 4





//  **Sum of Array Elements:**
// لحساب مجموع ارقام بداخل array
let numberss = [1, 2, 3, 4, 5];
let sum = 0;

for (let i = 0; i < numberss.length; i++) {
    sum += numberss[i];
}

console.log(sum); // Output: 15




// ************************************
// OBJECTS:
// key, value
// **Example:**
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    occupation: "Developer"
};

console.log(person.firstName); // Output: John
console.log(person["lastName"]); // Output: Doe


let person2 = {
    name: {
        fName: "Sandy",
        lName: "sawy",
    },
    age: 25,
    phone: [111000000000, "015555555"],
    func: function () {
        console.log("in object");
        return "here"
    },
    "0ss": "mmm"


}



console.log(person2)
console.log(person2)
console.log(person2.name)
person2.age = 20;
person2.func()
console.log(person2.func())

delete person2.age;


console.log(person2["0ss"])


// ** Adding and Modifying Properties:**
// You can add or modify properties using dot or bracket notation.
// يمكنك اضافة او تعديل في قيم عنصر معين بالشكل التالى

// **Example:**
person2.email = "john.doe@example.com"; // Adding a new property
person2.age = 20; // Modifying an existing property

