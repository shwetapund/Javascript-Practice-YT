function helloShweta(){
    console.log("Shweta");
    console.log("Shweta");
    
    console.log("Shweta");
    
    console.log("Shweta");
}

// helloShweta() //helloshweta ye ho gaya fun ka reference ab exwcute krne ke liye () lagnayenge

// function addtwoNum(num1 ,num2){
//   console.log(num1 + num2);
// }


function addtwoNum(num1 ,num2){
    // let result = num1 + num2
    // return result
    return num1 + num2  //iske vajese space bhi kam laga
  }

//jub bhi value return karenge to ap usko variable mein store kar skte hein eg. niche result var. ***console.log se nahi kar skate hein.
//bydefault function ke defination ka ek rule hota hein jo ki return apne jo kr diya to uske bad koi kam nahi karega function 

const result = addtwoNum(3,5) //3a
// addtwoNum(3,null)  //3

// console.log(addtwoNum(3,5));

function loginUserMessage(username = "sam"){
    if(!username ){
        console.log('Please enter a username');
        return //user krne aisa hei isne abhi uper ka return kr diya to ye kch kam hi nahi karega 
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("hitesh"))  
//to is tarah se bhi para meter liye jate hein

// console.log(loginUserMessage("shweta")) //hum jub aise empty string pass ki to run krke o/p = just logged in

//*****console.log(loginUserMessage())  jub hum kuch bhi value nahi pass krte to **undefined** ata hein*/ 

function calculateCartPrice(val1, val2, ...num1){
    return num1
}
//... isko rest or spread operator kaha jata hein
//**rest*...*:- mtlb humare pas jitna bhi item hein ye abhi bikhra bira hein isko sbko ek bundke mein pack kro aur muze dedo

// console.log(calculateCartPrice(200, 300, 400, 2200));

const user = {
    username:"shweta",
    priceu:188
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user)
handleObject({
    username: "sunny",
    price: 499
})

const myNewArray = [200, 400, 100, 500]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([200, 400, 600,700]));




