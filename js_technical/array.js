//Question 1 :- Ho to find duplcate elements in array ?

//======>

// const array = [2,5,6,3,3,2,5]
// const duplicate = array.filter((ele, index, arr)=>arr.indexOf(ele)!==index)
// console.log(duplicate); //find the duplicated elements

// const array1 = ["shweta", "shital", "shweta", "datta"]
// const orignial = array1.filter((ele, index, arr)=>arr.indexOf(ele)!==index)
// console.log(orignial); //find the original elements

//**********practice ************* */

// const array = [3,"shweta",4,"shital",4,5,2,6]
// const duplictes = array.filter((item, index,arr)=>arr.indexOf(item)!==index)
// console.log(duplictes);

// const orignial = [...new Set(array)]
// console.log(orignial);

//Question 2 How to find the max and min value in a given array in js?
//========>



//***************************************Array imp que *********************/

//Q 1: ek array lijjye aur us ke andr kuch additional properties hein apko sirf uski original properties ko hi loop ke nadar display krna hein ?

// Array.prototype.extraProperty = "shweta"
// const arrayone = [2,3,5,6,4,1]
// for(let v in arrayone){
//     console.log(v);
// } 
//Agar aisa kiya to orginal or extra property bhi display hoti hein

//*********************hasOwnProperty************************* 

// for(let v in arrayone){
//     if(arrayone.hasOwnProperty){
//         console.log(v);
//     }
// }


//*******************************Sort method *************** */
// const ArrayNumber = [5,3,1,8];
// ArrayNumber.sort();
// console.log(ArrayNumber);

// const arr = ["Harshad", "Rutuja", "Prachi", "Siddhi"];
// arr.sort();
// console.log(arr);