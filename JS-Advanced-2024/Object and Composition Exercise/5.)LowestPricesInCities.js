//Task: You will be given several towns, with products and their price. You need to find the lowest price for every product and the town it is sold at for that price.

// Input

// The input comes as an array of strings. Each element will hold data about a town, product, and its price at that town. The town and product will be strings, the price will be a number. The input will come in the following format:

// {townName} | {productName} | {productPrice}

// Output

// As output, you must print each product with its lowest price and the town at which the product is sold at that price. If two towns share the same lowest price, print the one that was entered first. The output, for every product, should be in the following format:

// {productName} -> {productLowestPrice} ({townName})

// The order of output in - order of entrance. See the examples for more info

//Solution:


function lowestPrices(arr){
    let obj = {};
    for (let row of arr) {
        let [town, product, price] = row.split(' | ');
        price = Number(price);
        obj[product] ? obj[product][town] = price : obj[product] = { [town]: price };
    }

    for (let key in obj) {
        let sort = Object.entries(obj[key]).sort((a, b) => a[1] - b[1]);
        console.log(`${key} -> ${sort[0][1]} (${sort[0][0]})`);
    }
}
lowestPrices(['Sample Town | Sample Product | 1000',

'Sample Town | Orange | 2',

'Sample Town | Peach | 1',

'Sofia | Orange | 3',

'Sofia | Peach | 2',

'New York | Sample Product | 1000.1',

'New York | Burger | 10'])