// finding second largest value from array 

let array = [10,29,40,23];
const max = Math.max.apply(null,array);
const removeMax = array.pop(max);
console.log(removeMax);