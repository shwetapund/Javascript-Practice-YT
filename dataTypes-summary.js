// Primitive dataTyoes

/** / 7 categories : String, Number, Boolean, null, undefined, Symbol, BigInt

//***null*** mtlb empty ye 0 nahi ye ye empty string bhi nahi hein

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

console.log(id === anotherId);

const bigNum = 333333333333333333666555n

/**/ // Reference (Non primitive) datatype
    // inka memory mein mein direct reference directly allocate kiya ja sakta hein 
    
        // Array, Objects, functions 

const heros =[ "sd", "ffg"] //array
let dimObj = {
    CGG: "dc"
} //objects