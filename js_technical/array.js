//Question 1 :- Ho to find duplcate elements in array ?

//======>

const array = [2,5,6,3,3,2,5]
const duplicate = array.filter((ele, index, arr)=>arr.indexOf(ele)!==index)
console.log(duplicate); //find the duplicated elements

const array1 = [2,5,6,3,3,2,5]
const orignial = array1.filter((ele, index, arr)=>arr.indexOf(ele)===index)
console.log(orignial); //find the original elements
