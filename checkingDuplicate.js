// checking and removing duplicate values from an array 

const names = ['saadi', 'nahid', 'rushow', 'joy', 'saadi', 'joy'];

function removeDuplicate (values){
    const finalArray = [];
    for(i = 0; i<values.length; i++){
        const element = values[i];
        if(finalArray.includes(element) === false){
            finalArray.push(element);
        }
    }
    return finalArray;
}
const output = removeDuplicate(names);
console.log(output);