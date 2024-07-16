// Immediately involked function expression

// function chai(){
//     console.log("db connected");
// }
// chai() 
//  pr humara global scope vaha se chije  pollute hoti hein kahi bar aur humine lagta hein ki ye polution atlest is function function ke adar to nahi hina chahiye us karan se hum iifelihk dte hein
(function chai(){
    console.log("db connected");
})() ; //named iife function hein

//global scope vaha se chije  pollute hoti hein us se ko hatne ke liye humne iife functino ka use kiya

( (name)=>{
    console.log(`chai 2 ${name}`);
})("shweta")
//simple iife function
