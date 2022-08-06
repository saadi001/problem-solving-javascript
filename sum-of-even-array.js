// sum of even values from an array 

function sumOfeven(numbers){
    let sum = 0;
    for(let i=0;i<numbers.length;i++){
        const index = i;
        const element = numbers[index];
        // console.log(element);
        if (element%2==0) {
            sum=sum + element;
        }
    }
    console.log(sum);
}

var array = [25, 23 ,12, 46, 14];
sumOfeven(array);