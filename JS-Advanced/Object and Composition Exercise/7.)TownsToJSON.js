//Task: You have to create a sorted catalog of store products. You will be given the products’ names and prices. You need to order them in alphabetical order.

// Input

// The input comes as an array of strings. Each element holds info about a product in the following format:

// "{productName} : {productPrice}"

// The product’s name will be a string, which will always start with a capital letter, and the price will be a number. There will be NO duplicate product input. The comparison for alphabetical order is case-insensitive.

// Output

// As output, you must print all the products in a specified format. They must be ordered exactly as specified above. The products must be divided into groups, by the initial of their name. The group's initial should be printed, and after that, the products should be printed with 2 spaces before their names. For more info check the examples.

//Solution:

function solve(arr) {
    let covert = str =>
        str.split("|").filter(x => x !== "").map(x => x.trim()).map(x => (isNaN(x) ? x : Number(Number(x).toFixed(2))));

    let metrics = covert(arr[0])

    return JSON.stringify(
        arr.slice(1).map(x => {
            let line = covert(x)
            return metrics.reduce((row, heading, entry) => {
                row[heading] = line[entry]
                return row
            }, {})
        })
    )
}

console.log(solve(['| Town | Latitude | Longitude |',

    '| Sofia | 42.696552 | 23.32601 |',

    '| Beijing | 39.913818 | 116.363625 |']))