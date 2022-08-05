// Question:  Write a function called odd_even() which takes an integer value and tells whether this
// value is even or odd. You need to do it in 4 ways:
// ● Has return + Has parameter
// ● No return + Has parameter

function odd_even(value){
    if(value%2==0){
        var even = "the value is even ";
        return even;
    }
    else{
        var odd = "the value is odd";
        return odd;
    }
    
}
var givenValue = odd_even(10);
console.log(givenValue);