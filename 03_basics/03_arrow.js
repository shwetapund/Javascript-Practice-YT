//************This keyword :- This keyword current context(simple value) ke bare mein batata hein or reffer karta hein*/
// current valu hein variable ki unke bat karta hein

const user = {
    username: "suraj",
    price: 455,
    welcomeMessage: function() {
        console.log(`${this.username}, welcome to Pune`);
        console.log(this);
    }
}
// user.welcomeMessage()
// user.username = "sai"
// user.welcomeMessage()

// console.log(this);👇

//jub node enviornment mein hein to this keyword {} empty object ko reffer krta hein kuioki abhi koi global ke andar koi context he nahi hein 

//**** Browser ke andar jo global object hein window object hein tabhi to windows ke sare event capture kr pate hein click hogaya , form submit ho gaya */

// function chai(){
//     const user = "hello"
//     console.log(this.user);
// }
// chai()

// const chai = function(){
//     const user = "hello"
//     console.log(this.user);
// }
// chai()

const chai = ()=> {
    const user = "hello"
    // console.log(this.user);
} //arrow function
chai() 

//difference between functino and arrow function 
//*** function :- mein sirf this keyword print kiya to global reff bohot sara kuch ata hein 
// or agar variable ke sath kiya to undefined ata hein

//*** arrow function :- mein sirf this keyword print kiya to {} empty obj ata hein 
// or agar variable ke sath kiya to undefined ata hein */

/******************************Arrow Function */

// const var1 = (num1, num2)=>{
//     return num1 + num2  //** explicit return **/ ismien {}hoto return use karenge
// }
// console.log(var1(2,3)); //simple arrow function

const var2 = (num1, num2)=> ( num1 + num2) //** implicit return ** :- mtlb hein mein man leta hu ki apko likhne ki jarurat nahi hein 
// () hot nahi use karenge

console.log(var2(2,3)); 
