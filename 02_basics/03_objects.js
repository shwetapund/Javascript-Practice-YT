//singleton = jo constructor se banega wo hamesha singleton banega

//object literals

const mySymbol = Symbol("key1") //symbol declare

const JsUser = {
    name: "shweta",
    age: "21",
    [mySymbol]:"mykey1", //symbol access with key and value
    location: "Nagar💖",
    email: "shweta@gmail.com",
    isLoggedIn: false,
    lastLogginedDays: ["monday","satursday"]
} //object declare

//Object.create ==> **object aise bhi bna sakte hein isko hi constructor bola jata hein aur iske andar singlton bnt hein 

// console.log(JsUser.email) //object access tarika 1
// console.log(JsUser["email"]); //object access tarika 2

// console.log( JsUser[mySymbol]); //symbol print

JsUser.email = "shweta123@g ail.com" //value ko change krna
// Object.freeze(JsUser) //freeza karna cc=mtlb hum usko fix krte hein uski value ki iske bad ap value kroge tub bhi mein change nahi karne dungi
JsUser.email = "shweta345@gmail.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello js user");
}
// console.log(JsUser.greeting); //aisa kiya to function execute nahi hua hein sirf function ka ref ayah hien 

 

JsUser.greetingTwo = function(){
    console.log(`Hello js user, ${this.name}`); //humine same obj ko ref karna hein to hum likh sakte hein **this ke bad . lagaynege to jo bhi huamra object hein uske andar jiti properties hein wo humein sub mil jayenge eg this.name
}
console.log(JsUser.greetingTwo()); 



