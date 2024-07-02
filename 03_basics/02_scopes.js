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
// console.log(c); 

function one(){
    const username = "shweta"

    function two(){
        const website = "youtube" //
        console.log(username);
    }
    // console.log(website);
     //hum bahar ke function ki value andar ke function access kr skte hein par andar ke function ki value bahar ka function nahi access kr sakta

    two()
}
//one()

if(true){
    const username = " shweta"
    if(username === " shweta"){
        const add = "Hii"
        // console.log(add + username);
    }
    // console.log(add);
}
// console.log(username);

addone(2)
function addone(num){
    return num + 1
}
//jub humne aisa simple function banaya to hoisting mein kuch problem nahi ata pr 👆
//agar humne variable declare krke kiya to error ati hein 👇
const addTwo = function(num){
    return num + 2
}
addTwo(5)

//************* Closure and hoisting ************************

//Hoisting:- In js a variable can used before it hs been declare
//           A variable can be declaredafter it has been used.
//           Hoisting makes vaiables accessible evenbefore thier creation 

//Closure:- Closure are function inside a function 
//          closure is access the values of variable of parent function even after it is returned

