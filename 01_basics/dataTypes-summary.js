// *****************************Primitive dataTyoes*********************************

/** / 7 categories : String, Number, Boolean, null, undefined, Symbol, BigInt

//***null*** mtlb empty ye 0 nahi ye ye empty string bhi nahi hein 
null ek *object* return karta hein

//***undefined*** mtbl variable declare kiya hein par abhi value assign nahi ki hein

//***Symbol**** kisi bhi value ko unique bnane ke liye use hota hein 

//***BigInt*** kuch signtific values aur kuch big value hein jinko humein handle karte nahi a raha hein to unke hum BigInt mien use karte hein */

const score = 100
const scoreValue = 100.5

const isLogin = false
const temperature = null
let userEmail = undefined

const id = Symbol('123')
const anotherId = Symbol('123')
//symbol: symbol mein hum value pass krte hein jo b=humein return type milta hein vo bhi alga type ka hi hota heein

//console.log(id === anotherId);

// const bigNum = 333333333333333333666555

/**/ // Reference (Non primitive) datatype
    // inka memory mein mein direct reference directly allocate kiya ja sakta hein 
    
        // Array, Objects, functions 

const heros =[ "sd", "ffg"] //array

let dimObj = {
    CGG: "dc"
} //objects

const myFunction = function(){
   // console.log("Hello world");
}

console.log(typeof myFunction);

//function actually function hi return karta hein but isko kehet hein **objectFunction**
//function ke return specialist ko objectfunction bola jata hein 
//jitne bhi non primitive type hein inka jo return type ata hein wo obj hi ata hein 

//retunr type
//**********************************************************
//null = Object
//function = function , objectFunction
//undefined = undefined

//*********************************************************************************************

// *****************************Memories*****************************

//types of memory :1. Stack (Primitive type mien stack memry use hoti hein),
//                 2. Heap (Non-Primitive) 

//Stack : jub bhi stack memory use hoti hein uska mtlb kya heinjo bhi humne varible declare kra hein uska humein copy milta hein  OR

//Heap : jub bhi memory heap ke ndar define hoti heinya koi object heap ke andar chala jaya hein t vha se apko milta hein reference original value ka to jo bhi change karenge to wo original value mein change honga

//eg.

let myhome = "DattaNagar"

let anotherhome = myhome
anotherhome = "deolali"

console.log(myhome);
console.log(anotherhome);

let userOne = {
    email: "user1@gmail.com",
    upi: "user1"
}

let userTwo = userOne //ismein userTwo ko value keise milti hein to usko ab userOne ke valua ka ref milega 

userTwo.email = "shweta@goole.com" //obj mien . se hum value ko acess kr skte hein

console.log(userOne.email);
console.log(userTwo.email);

