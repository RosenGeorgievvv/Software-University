//Task: Write a function that sorts an array of numbers so that the first element is the smallest one, the second is the biggest one, the third is the second smallest one, the fourth is the second biggest one, and so on.

// Return the resulting array.

//Solution:

function sortNumbers(arr){
    arr.sort((a, b) => a - b);

 let result = arr.reduce((acc, value, index, array) => {
     let nextValue = index % 2 === 0 ? array[index / 2] : array[array.length - 1 - (index - 1) / 2];
        return acc.concat(nextValue);
    }, []);

    return result;
}
console.log(sortNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));