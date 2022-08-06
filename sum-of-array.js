// output of sum of array 

function sumOfArray(numbers){
    let sum = 0;
        for(let i = 0; i < numbers.length;i++){
            const index = i;
            const element = numbers[index];
            sum = sum+element;   
        }
        console.log(sum);

}

const array = [12, 14, 45, 8, 15,56,23];
sumOfArray(array);