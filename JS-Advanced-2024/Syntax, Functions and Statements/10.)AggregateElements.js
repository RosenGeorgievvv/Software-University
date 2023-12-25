//Task: Write a program that performs different operations on an array of elements. Implement the following operations:
// •	Sum(ai) - calculates the sum of all elements from the input array
// •	Sum(1/ai) - calculates the sum of the inverse values (1/ai) of all elements from the array
// •	Concat(ai) - concatenates the string representations of all elements from the array
// The input comes as an array of number elements.
// The output should be printed on the console on a new line for each of the operations.


//Solution:

function aggElements(arr){

    let mappedArr = arr.map(Number);

    let sumOperation = mappedArr.reduce((a,b) => a + b);
    console.log(sumOperation);
    let inverseSum = 0;

    for(let i = 0; i < mappedArr.length; i++){
        inverseSum += 1 / mappedArr[i];
    }
    console.log(inverseSum);

    let concatStr = mappedArr.join('');
    console.log(concatStr);
}
aggElements([1, 2, 3])