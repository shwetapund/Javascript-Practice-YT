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

console.log(loginUserMessage("sjweta")) //hum jub aise empty string pass ki to run krke o/p = just logged in

//*****console.log(loginUserMessage())  jub hum kuch bhi value nahi pass krte to **undefined** ata hein*/ 
