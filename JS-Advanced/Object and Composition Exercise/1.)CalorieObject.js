//Task: Write a function that composes an object by given properties. The input comes as an array of strings. Every even index of the array represents the name of the food. Every odd index is a number that is equal to the calories in 100 grams of the given product. Assign each value to its corresponding property, and finally print the object.

// The input comes as an array of string elements.

// The output should be printed on the console.


//Solution:

function calObject(arr) {

    let myObj = {};

    for (let i = 0; i < arr.length; i += 2) {
        let name = arr[i];
        let cals = Number(arr[i + 1]);
        myObj[name] = cals;
    }
    console.log(myObj);
}
calObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])