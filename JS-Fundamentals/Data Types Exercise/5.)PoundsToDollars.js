//Task: Write a function that converts British pounds to dollars formatted to the 3rd decimal point.

// · 1 British Pound = 1.31 Dollars

//Solution:

function cash(pounds){

    let converted = pounds * 1.31;
    console.log(converted.toFixed(3));
}
cash(80)