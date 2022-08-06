// factorial 

function getFactorial (value){
    let result = 1;
    for(i=value; i>=1; i--){
        const index = i;
        result = result * index;
    }
    console.log(result);
}

getFactorial(4);
