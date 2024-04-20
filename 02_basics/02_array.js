const school_boys = ["sanjay", "shyam", "raju"]
const school_girls = ["rani", "shyamli", "vani"]

// school_boys.push(school_girls)

// console.log(school_boys);

// const allBG = school_boys.push(school_girls)
// console.log(allBG);

//concat: Combines two or more arrays. This method returns a new array without modifying    any existing arrays. **vaise ye new array return karta hein

//push : **ye exiciting array mein hi new value add karta hein 

//spread: (...) **mtlb eg kanch ke glass mein ek drop pani dala to wo spread ho jayegana vaise hi

const all_new_BG = [...school_boys, ...school_girls] //jub hum ... lagaya tub us array nahi raha uske ek ek element individual ho gaye hein
// console.log(all_new_BG);

const another_arr = [1,2,3, [4,5,6],7,[6,7,[4,5]]]

const real_another_arr = another_arr.flat(Infinity)
console.log(real_another_arr);
//flat: **Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.

console.log(Array.isArray("shweta"))
console.log(Array.from("shweta")) //Array.from** :- ye array mein coonvert kr deta hein
console.log(Array.from({name:"shweta"})); //intresting 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
//Array.of : **Returns a new array from a set of elements.


