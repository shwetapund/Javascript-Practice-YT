//array

const myArr = [0, 1, 2, 3, 4, 5, 4, 77, 5] //array declare
// console.log(myArr[0]);

const mygods = ["ganpati", "shiv", "ram"] //array declare

const myName = new Array(1,2,2,3) //array declare


//** the array is a object which is store a collection of multiple items like number, string, bollean, objects, arrays value  in a single variable

//** array elements can not be access using arbitrary strings as indexes
// ** array index starts with 0

//** js array-copy operation creates **shallow copies** 

//** Shallow copies : shallow copy is an object whose property share the same reference point 
//** Deep Copy : A deep copy is an  object is a copy whose property do not share the same reference

// myArr.push(6) //array method 1
// myArr.push(8) //array method 
// myArr.pop() //array method 2

// myArr.unshift(5) //array method 3
// myArr.shift() //array method 4
// myArr.sort() //array method 5
// console.log(myArr.includes(5)); //array method 6
// console.log(myArr.indexOf(4)); //array method 7

// const newArr = myArr.join() //array method 8 - ye method array ko string mein convert kr deti hein aur join bhi karta hein

// console.log(myArr);
// console.log(newArr);

//slice, splice 

console.log("A", myArr);

//slice: Returns a copy of a section of an array return karta hein ek section of an array
const newArr1 = myArr.slice(1, 3)

console.log(newArr1);
console.log("B", myArr);

const newArr2 = myArr.splice(1, 3)
console.log(myArr);
console.log(newArr2);

//splice: Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

//understand🤗
//In slice method hum elements ko get karne ke bad wo section ki copy return karta hien original array mein kuch bhi nahi kiayy jata 
//In splice method mein original array mein change hota hein



