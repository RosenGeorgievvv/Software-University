//Task: Write a function that calculates the total price of an order and prints it on the console. The function should receive one of the following products: coffee, coke, water, snacks; and a quantity of the product. The prices for a single piece of each product are:

// · coffee - 1.50

// · water - 1.00

// · coke - 1.40

// · snacks - 2.00

// Print the result formatted to the second decimal place


//Solution: 

function orders(product, quantity) {
    let price = 0;

    switch (product) {
        case 'coffee':
            price = 1.50;
            break;
        case 'water':
            price = 1.00;
            break;
        case 'coke':
            price = 1.40;
            break;
        case 'snacks':
            price = 2.00;
            break;
        default:
            return;
    }
    let totalPrice = price * quantity;
    console.log(totalPrice.toFixed(2));
}
orders("water", 5)