/* there will be many numbers in an array and you will found positive. 
if you found positive number then add them in another array. if you 
found negative number then stop the loop */

const arrayNumbers = [10,450,12,-78,56,-65];

function positiveNumber (values){
    for(let i=0; i< values.length; i++){
        const element = values[i];
        if(element < 0){
            break;
        }
        else{
            console.log(element);
        }
    }
    return;  

}
const output = positiveNumber(arrayNumbers);
