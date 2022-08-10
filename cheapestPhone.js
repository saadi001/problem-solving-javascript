// getting the chepest phone from an array of object 

const phones = [
    {name: 'samsung', camera: 12, price : 24000, storage: '32 GB', color: 'blue'},
    {name: 'Iphone', camera: 12, price : 90000, storage: '32 GB', color: 'blue'},
    {name: 'huwaei', camera: 12, price : 50000, storage: '32 GB', color: 'blue'},
    {name: 'oppo', camera: 12, price : 20000, storage: '32 GB', color: 'blue'},
    {name: 'onePlus', camera: 12, price : 40000, storage: '32 GB', color: 'blue'}
];

function cheapestPhones (values){
    let cheapest = values[0];
    for(let i = 0; i< values.length; i++){
        let element = values[i];
        if(element.price < cheapest.price){
            cheapest = element;
        }   
    }
    return cheapest;
}

const phone = cheapestPhones(phones);
console.log(phone);