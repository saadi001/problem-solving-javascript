// reversing word by word of a string 

function reverseWord (str){
    const words = str.split(' ');
    let result = [];
    for(i=words.length-1; i>=0; i--){
        const element = words[i];
        result.push(element);
    }
    const reversed = result.join(" ");
    console.log(reversed);
    

}
const string = "hello this is saadi";
const output = reverseWord(string);