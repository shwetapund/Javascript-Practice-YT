//********** Impliment a custom foreach in javascript **************************

//custom foreach mtlb hein ki uske prototype ke andar hi apko kuch na kuch inject krna hein

Array.prototype.customForEachOne = function(callback){ 
    for(let i=0; i<this.length; i++)
        { callback(this[i], i, this)

         }
         }
