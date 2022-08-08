// doing reverse of a string 

function reverseString (string){
    let reversed = " ";
    for(let i= string.length-1; i >= 0; i--){
        const element = string[i];
        reversed = reversed + element;
        // console.log(element);
    }
    return reversed;
    
}
let str = "sheikh saadi shuvo";
let output = reverseString(str);
console.log("reverse of "+str+" is :")
console.log(output);