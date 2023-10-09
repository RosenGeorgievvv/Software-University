//Task: You will receive an array of products. Print a numbered array of all the products ordered by name.

//Solution:

function productsList(arr) {

    let sortedArr = arr.sort();
    for(let i = 0; i < sortedArr.length; i++){
        console.log(`${i + 1}.${sortedArr[i]}`);
    }
}
productsList(["Potatoes", "Tomatoes", "Onions", "Apples"]);
