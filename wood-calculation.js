// You will take quantity of each chair, table and bed then calculate the total  woods you need

function wood(chairQuantity, tableQuantity, bedQuantity){
    const perChair = 5;
    const perTable = 8;
    const perBed = 10;

    const totalChair = chairQuantity * perChair;
    const totalTable = tableQuantity * perTable;
    const totalBed = bedQuantity * perBed;

   const totalWood = totalChair + totalBed + totalTable;

   return totalWood;
}

const woodsComponent = wood(5, 14, 16);
console.log(woodsComponent);