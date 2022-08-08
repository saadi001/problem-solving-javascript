// finding out fibonacci series 

function fibonacci (value){
    let fibo = [0,1];
    for(i=2; i<=value; i++){
        
        fibo[i] = fibo[i-2]+fibo[i-1];
        
        
    }
    console.log(fibo);

}
const valueOfFibo = 12;
const output = fibonacci(valueOfFibo);
