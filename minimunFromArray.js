// finding minimum value from an array 

function minValue (values){
    let minimum =  values[0];
    for(i=0; i<values.length; i++){
            let element = values[i];
            if(minimum > element){
                minimum = element;
            }
    }
    console.log(minimum);

}
const array = [23, 11, 45, 37,7];
const output = minValue(array);
// console.log(output);