const accountId = 4000
let accountEmail = "shweta@gmail.com"
var accountPassword = "123345"
accountCity = "pune"

// accountId = 3 //not allowed

accountEmail = "shital@gmail.com"
accountPassword = "212356"
accountCity = "nagar"

/*
Prefer not to use var
because of issue in block scope and functional scope
*/ 
console.log(accountId);

console.table([accountEmail, accountId, accountPassword, accountCity]);