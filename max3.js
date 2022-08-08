// finding max value among three numbers 



function max(a,b,c){
    
    const maxValue = Math.max(a,b,c);
    return maxValue;
    
    
}
const num1 = 10;
const num2 = 20;
const num3 = 30;
const output = max(num1,num2,num3);
console.log(output);


// another way of doing this 

function maxInArray (values){
        let largestNumber = [0];
        for(i=0; i<values.length; i++){
            const element = values[i];
            if(element > largestNumber){
                largestNumber = element;
            }
        }    
        return largestNumber;

}
const numbers = [234, 434, 212, 45, 555];
const tallestNumber = maxInArray(numbers);
console.log(tallestNumber);
