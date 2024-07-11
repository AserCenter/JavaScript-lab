// let fruits = ["apple", "banana", "BANANA"];
// //           0, 1, 2
// let array = [1, 2, 3];

// console.log("1/ array: ", array); 
// array[1] = 25;
// array[2] = 30;

// console.log("fruits:", fruits);
// console.log("fruits:", fruits.length);

let numbers = [1, 2, 3, 4, 5,6,5,89,22,45,43,39];
let x = numbers.length - 1;
console.log(numbers[x]);// 39
let myFruits = ["apple", "banana", "cherry", "date"];
myFruits.push("watermelon")
console.log(myFruits)

myFruits.pop();
console.log(myFruits)

let fruits = ["Apple", "Banana", "Orange"];
let firstFruit = fruits.shift()

console.log(firstFruit); // Output: "Apple"
console.log(fruits); // Output: ["Banana", "Orange"]



let numberss = [1,2,3,4,5] 

numberss.unshift(0);

console.log(numberss)



let fruits1 = ["Apple", "Banana"];
let fruits2 = ["Orange", "Mango"];
let allFruits = fruits1.concat(fruits2);
console.log(allFruits); // Output: ["Apple", "Banana", "Orange", "Mango"]
console.log(fruits1);
console.log(fruits2);

 // Output: ["Apple", "Banana", "Orange", "Mango"]
// slice(start, end)


//                  
let someNumbers = [0,1,2,3,4,5,6,7]
let sliceSome=  someNumbers.slice(0, 2);
console.log("all:",someNumbers); 
console.log("sliceSome:",sliceSome);


//                            start, number of deleted elements, new element   
let some=  someNumbers.splice(3, 2, "new");
console.log("all:",someNumbers); // [1,15,5,6,7]
// console.log("some:",some); [2,3,4]

//              0   1          2        3
let months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
console.log("months", months); // Output: ["Jan", "Feb", "March",]

let index = months.indexOf('April');
console.log(index); // Output: 1;


let hasBanana = months.includes("Banana");
console.log(hasBanana); // Output: true



let monthsString = months.join(" $ ");
console.log(monthsString);

months.reverse();
console.log(months); 
months.sort();
console.log(months); 





