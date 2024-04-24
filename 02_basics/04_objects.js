// const tinderUser = new Object() //singleton object
// const tinderUser = {} //non singleton object
// //baki all same hein

// tinderUser.id = "123abc"
// tinderUser.name = "shweta"
// tinderUser.isLoggedin = false

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
console.log(regularUser.fullname.userfullname.firsetname);
