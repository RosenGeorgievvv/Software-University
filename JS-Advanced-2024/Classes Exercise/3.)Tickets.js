//Task: Write a program that manages a database of tickets. A ticket has a destination, a price, and a status. Your program will receive two arguments - the first is an array of strings for ticket descriptions and the second is a string, representing a sorting criterion. The ticket descriptions have the following format:

// <destinationName>|<price>|<status>

// Store each ticket and at the end of execution return a sorted summary of all tickets, sorted by either destination, price, or status, depending on the second parameter that your program received. Always sort in ascending order (the default behavior for alphabetical sort). If two tickets compare the same, use order of appearance. See the examples for more information.


//Solution:

function ticketsTask(tickets, orderBy) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }

        static getTicket(input) {
            const [destination, price, status] = input.split('|');
            return new Ticket(destination, Number(price), status);
        }
    }

    const sorts = {
        destination: (a, b) => a.destination.localeCompare(b.destination),
        price: (a, b) => a.price - b.price,
        status: (a, b) => a.status.localeCompare(b.status),
    };

    return tickets.map(Ticket.getTicket).sort(sorts[orderBy]);
}

console.log(ticketsTask(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'destination'
));

console.log(ticketsTask(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'status'
));