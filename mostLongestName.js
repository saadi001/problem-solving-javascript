// find out the biggest name among your best friend 

function bestFriend (names){

    let largest = names[0];
    // const len = largest.length;
    // console.log(len);
    for(let i = 0; i< names.length; i++){
        const element = names[i];
        // const len = element.length;
        // console.log(len);
        if(element.length > largest.length){
            largest = element;
        }
    }
    return largest;

}
const names = ['nahid', 'sheikh saadi', 'joy', 'hasibur'];
const largestName = bestFriend(names);
console.log(largestName);