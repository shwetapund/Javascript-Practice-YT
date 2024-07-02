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

console.log(this);

//jub node enviornment mein hein to this keyword {} empty object ko reffer krta hein kuioki abhi koi global ke andar koi context he nahi hein 

//**** Browser ke andar jo global object hein window object hein tabhi to windows ke sare event capture kr pate hein click hogaya , form submit ho gaya */