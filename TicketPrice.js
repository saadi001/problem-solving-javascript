// if you buy 100 tickets then every tickets will take 100 tk 
// but if you take more than 100 tickets and less than 200 tickets first 100 will take same price but rest will take 90 tk
// and again if you take more than 200 tickets then first 200 will take same price and rest will take 80 tk. 

function ticketPrice (ticketQuantity){
        const first100TicketRate = 100;
        const second100TicketRate = 90;
        const restTicketPrice = 80;
        if(ticketQuantity <= 100){
            const price = ticketQuantity * first100TicketRate;
            return price;
        }
        else if(ticketQuantity <= 200 ){
            const first100TicketPrice = 100 * first100TicketRate;
            const restTicketQuantity = ticketQuantity - 100;
            const restTicketPrice = restTicketQuantity * 90;
            const total = first100TicketPrice + restTicketPrice;
            return total;
        }
        else{
            const first100TicketPrice = 100 * first100TicketRate;
            const second100TicketPrice = 90 * second100TicketRate;
            const restTicketQuantity = ticketQuantity - 200;
            const restTicketPrice = 80 * restTicketQuantity;
            const totalPrice = first100TicketPrice + second100TicketPrice + restTicketPrice;
            return totalPrice;
        }

}
const ticket = ticketPrice(215);
console.log(ticket);