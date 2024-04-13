const name = "shweta"
const repoCount = 50

//console.log(name + repo + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); //**string interposition or **template string]

//new keyword used kiya jata hein to obj use kiya jata hein js ke

const gamename = new String("shweta-hii-hello") //string define

console.log(gamename[0]);
console.log(gamename.__proto__); // find the prototype
console.log(gamename.length); //find the length 
console.log(gamename.toUpperCase()); //convert upperCase
console.log(gamename.charAt(2)); //find the character 
console.log(gamename.indexOf('t')); //find the index

const newstring = gamename.substring(0, 4)
console.log(newstring);

const antoherString = gamename.slice(-8, 4)
console.log(antoherString);

const newStringOne = "       shweta       "
console.log(newStringOne);
console.log(newStringOne.trim()); //trim method sirf whtiespace par pe he kam karte hein

const url = "https://shweta.com/shweta%20pund"

console.log(url.replace('%20', '-')); //replace karne kel liye

console.log(url.includes('shweta'));

console.log(gamename.split('*'));