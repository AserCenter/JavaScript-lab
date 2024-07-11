
// ### 1. `push()`
// The `push()` method adds one or more elements to the end of an array and returns the new length of the array.

// **Example:**
let fruits = ["Apple", "Banana"];
fruits.push("Orange");
console.log(fruits); // Output: ["Apple", "Banana", "Orange"]

// ### 2. `pop()`
// The `pop()` method removes the last element from an array and returns that element. This method changes the length of the array.

// **Example:**

// let fruits = ["Apple", "Banana", "Orange"];
let lastFruit = fruits.pop();
console.log(lastFruit); // Output: "Orange"
console.log(fruits); // Output: ["Apple", "Banana"]


// ### 3. `shift()`
// The `shift()` method removes the first element from an array and returns that element. 
// This method changes the length of the array.

// **Example:**

// let fruits = ["Apple", "Banana", "Orange"];
let firstFruit = fruits.shift();
console.log(firstFruit); // Output: "Apple"
console.log(fruits); // Output: ["Banana", "Orange"]


// ### 4. `unshift()`
// The `unshift()` method adds one or more elements to the beginning of an array and returns the new length of the array.

// **Example:**

// let fruits = ["Banana", "Orange"];
fruits.unshift("Apple");
console.log(fruits); // Output: ["Apple", "Banana", "Orange"]


// ### 5. `concat()`
// The `concat()` method is used to merge two or more arrays. 
// This method does not change the existing arrays but returns a new array.

// **Example:**

let fruits1 = ["Apple", "Banana"];
let fruits2 = ["Orange", "Mango"];
let allFruits = fruits1.concat(fruits2);
console.log(allFruits); // Output: ["Apple", "Banana", "Orange", "Mango"]


// ### 6. `slice()`
// The `slice()` method returns a shallow copy of a portion of an array into a new array object.
//  You can specify the start and end index.

// **Example:**

// let fruits = ["Apple", "Banana", "Orange", "Mango"];
// slice(start, end)
fruits.slice(1, 3);
console.log(fruits); // Output: ["Banana", "Orange"]


// ### 7. `splice()`
// The `splice()` method changes the contents of an array 
// by removing or replacing existing elements and/or adding new elements in place.

// **Example:**

const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
console.log("months", months); // Output: ["Jan", "Feb", "March",]
// ### 8. `indexOf()`
// The `indexOf()` method returns the first index at which a given element can be found in the array, or -1 if it is not present.

// **Example:**

// let fruits = ["Apple", "Banana", "Orange"];
let index = fruits.indexOf("Banana");
console.log(index); // Output: 1


// ### 9. `includes()`
// The `includes()` method determines whether an array includes a certain value among its entries, returning `true` or `false`.

// **Example:**

// let fruits = ["Apple", "Banana", "Orange"];
let hasBanana = fruits.includes("Banana");
console.log(hasBanana); // Output: true


// ### 10. `join()`
// The `join()` method joins all elements of an array into a string and returns this string. You can specify a separator.

// **Example:**

// let fruits = ["Apple", "Banana", "Orange"];
let fruitString = fruits.join(", ");
console.log(fruitString); // Output: "Apple, Banana, Orange"


// ### 11. `reverse()`
// The `reverse()` method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.

// **Example:**

// let fruits = ["Apple", "Banana", "Orange"];
fruits.reverse();
console.log(fruits); // Output: ["Orange", "Banana", "Apple"]


// ### 12. `sort()`
// The `sort()` method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending.

// **Example:**

// let fruits = ["Orange", "Banana", "Apple"];
fruits.sort();
console.log(fruits); // Output: ["Apple", "Banana", "Orange"]

