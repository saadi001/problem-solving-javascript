/* show outpit from 1 to 50. 
If the number is divisle by 3 then print foo
If the number is divisle by 5 then print bar
If the number is divisle by both 3 and 5 then print foobar */

for(i = 0; i<=50; i++){
    if((i % 3 == 0) && (i % 5 == 0)){
        console.log("foobar");
    }
    else if(i % 3 == 0){
        console.log("foo");
    }
    else if(i % 5 == 0){
        console.log("bar");
    }
    else{
        console.log(i);
    }
}