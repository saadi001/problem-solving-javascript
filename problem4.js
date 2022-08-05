// Question:  Write a function called make_avg() which will take an three integers and return the
// average of those values.

function make_avg(a,b,c){
    const sum = a + b + c;
    const average = sum /3;
    return average;
}
var totalAverage = make_avg(10,15,10);
totalAverage =  totalAverage.toFixed(2);
console.log(totalAverage);