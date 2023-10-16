//Task:On the first three lines, you will receive the quantity of food, hay, and cover, which Merry buys for a month (30 days). On the fourth line, you will receive the guinea pig's weight.

// Every day Puppy eats 300 gr of food. Every second day Merry first feeds the pet, then gives it a certain amount of hay equal to 5% of the rest of the food. On every third day, Merry puts Puppy cover with a quantity of 1/3 of its weight.

// Calculate whether the quantity of food, hay, and cover, will be enough for a month.

// If Merry runs out of food, hay, or cover, stop the program!

// Input

// · On the first line – quantity food in kilograms - a floating-point number in the range [0.0 – 10000.0]

// · On the second line – quantity hay in kilograms - a floating-point number in the range [0.0 – 10000.0]

// · On the third line – quantity cover in kilograms - a floating-point number in the range [0.0 – 10000.0]

// · On the fourth line – guinea's weight in kilograms - a floating-point number in the range [0.0 – 10000.0]

// Output

// · If the food, the hay, and the cover are enough, print:

// o "Everything is fine! Puppy is happy! Food: {excessFood}, Hay: {excessHay}, Cover: {excessCover}."

// · If one of the things is not enough, print:

// o "Merry must go to the pet store!"

// The output values must be formatted to the second decimal place!


//Solution:


function solve(food, hay, cover, weight) {

    let totalFood = food * 1000;
    let totalHay = hay * 1000;
    let totalCover = cover * 1000;
    let totalWeight = weight * 1000;
    let count = 1;

    while (count <= 30) {

        totalFood -= 300;
        if (count % 2 === 0) {
            totalHay -= (totalFood * 5) / 100;
        }
        if (count % 3 === 0) {
            totalCover -= totalWeight * 0.3333;
        }

        count++;
    }
    let foodKg = totalFood / 1000;
    let hayKg = totalHay / 1000;
    let coverKg = totalCover / 1000;

    if (foodKg >= 0 && hayKg >= 0 && coverKg >= 0) {
        console.log(`Everything is fine! Puppy is happy! Food: ${foodKg.toFixed(2)}, Hay: ${hayKg.toFixed(2)}, Cover: ${coverKg.toFixed(2)}.`);
    } else if (foodKg < 0 || hayKg < 0 || coverKg < 0) {
        console.log('Merry must go to the pet store!');
    }
}
solve(10,5,5.2,1);