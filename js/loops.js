// repeate= repeate + 2
// repeate ++
// repeate +=2
// repeate --

/*
1
2
3
4
5
6 false
*/

/*
1
3
5
7 false
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
console.log(9< numbers.length)
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
// OBJECTS:
// key, value

let person = {
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
    "0ss" :"mmm"


}



console.log(person)
console.log(person)
console.log(person.name)
person.age = 20;
person.func()
console.log(person.func())

delete person.age;


console.log(person["0ss"])