var c = 300

if(true) {
    let a = 10;
    const b = 20;
    c = 30; //var ye keyword subko accessible hein
} // block scope 

//ye j bahar ka code hein ye global scope hua
//global scope - ke anadar ka sub vale accessible rehete hein bloack scope ke andar 
//block scope  - par iske andar ki value bahar nahi jana chahiye nai accessible hona chahiye

// console.log(a);
// console.log(b);
console.log(c); 