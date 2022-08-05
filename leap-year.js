// checking leaf year or not

function isLeafYear(year){
    if (year%400==0) {
        console.log(year, " is leaf year");
    } else if(year%100==0){
        console.log(year, " is not leaf year");
    }
    else if(year%4==0){
        console.log(year, " is not a leaf year");
    }
    else{
        console.log(year, " is not a leaf year")
    }
}
isLeafYear(2000);