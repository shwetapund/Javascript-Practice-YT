const tinderUser = new Object() //singleton object
// const tinderUser = {} //non singleton object
// //baki all same hein

tinderUser.id = "123abc"
tinderUser.name = "shweta"
tinderUser.isLoggedin = false

// console.log(tinderUser);

const regularUser = {
    email: "shweta@gmail.com",
    fullname: {
        userfullname:{
            firsetname: "shweta",
            lastname: "pund"
        }
    }
}
console.log(regularUser.fullname?.userfullname.firsetname); 

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}


// const obj3 = { obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2} //all values ko spread krke aur obj ke name ko combine kr diya
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "s@gmail.com"
    },
    {
        id: 1,
        email: "s@gmail.com"
    }

]
users[1].email

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLogged')); //check the property using hasOwnPrpoperty

// **Object.assign = Copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object.
