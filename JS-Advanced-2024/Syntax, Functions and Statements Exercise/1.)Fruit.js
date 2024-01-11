//Task: Write a function that calculates how much money you need to buy fruit. You will receive a string for the type of fruit you want to buy, a number for weight in grams, and another number for the price per kilogram. 
// Print the following text on the console:  
// `I need ${money} to buy {weight} kilograms {fruit}.`
// Print the weight and the money rounded to two decimal places.

//Solution:

function fruitTask(typeFruit, weightInGrams, pricePerKilo) {

    let weight = Number(weightInGrams);
    let price = Number(pricePerKilo);


    let weightInKilo = (weight / 1000);
    let sum = (weightInKilo * price);
    console.log(`I need $${sum.toFixed(2)} to buy ${weightInKilo.toFixed(2)} kilograms ${typeFruit}.`);
}
fruitTask('orange', 2500, 1.80)