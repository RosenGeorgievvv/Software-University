//Task: Write a higher-order function createFormatter that fixes some of the parameters of another function. Your program will receive four parameters: three values and a function that takes 4 parameters and returns a formatted string (a monetary value with currency symbol).

// Your task is to return a partially applied function, based on the input function that has its first three parameters fixed and only takes one parameter.


//Solution:

function formatterFunction(separator, symbol, firstSymbol, formatter){
    return (sum) => formatter(separator, symbol, firstSymbol, sum);
}



let dollarFormatter = createFormatter(',', '$', true, currencyFormatter);
console.log(dollarFormatter(5345));   // $ 5345,00
console.log(dollarFormatter(3.1429)); // $ 3,14
console.log(dollarFormatter(2.709));  // $ 2,71