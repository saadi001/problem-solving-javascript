// checking grade by function 

function grade(value){
    if (value>=80) {
        // console.log("A");
        return "A";
    } 
    else if(value>=70) {
        // console.log("B");
        return "B";
    }
    else if(value>=60) {
        // console.log("C");
        return "C";
    }
    else if(value>=50) {
        // console.log("D");
        return "D";
    }
    else{
        // console.log("Fail")
        return "Fail";
    }
}
const output = grade(40);
console.log(output);
