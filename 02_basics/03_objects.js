//singleton = jo constructor se banega wo hamesha singleton banega

//object literals

const mySymbol = Symbol("key1")

const JsUser = {
    name: "shweta",
    "age smae": "21",
    location: "Nagar💖",
    email: "shweta@gmail.com",
    isLoggedIn: false,
    lastLogginedDays: ["monday","satursday"]
} //object declare

//Object.create ==> **object aise bhi bna sakte hein isko hi constructor bola jata hein aur iske andar singlton bnt hein 

console.log(JsUser.email) //object access tarika 1
console.log(JsUser["email"]); //object access tarika 2
console.log(JsUser["age smae"]);





