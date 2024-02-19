//Task:Write a function, which changes the value of odd and even numbers in an array of numbers.

// · If the number is even - add to its value its index position

// · If the number is odd - subtract to its value its index position

// Output

// On the first line print the newly modified array, on the second line print the sum of numbers from the original array, on the third line print the sum of numbers from the modified array.

//Solution:

function addSubstract(arr) {
  let modifiedArray = [];
  let originalSum = 0;
  let modifiedSum = 0;

  for (let i = 0; i < arr.length; i++) {
    originalSum += arr[i];

    let modifiedNum = 0;
    if (arr[i] % 2 == 0) {
      modifiedNum = arr[i] + i;
    } else {
      modifiedNum = arr[i] - i;
    }

    modifiedArray.push(modifiedNum);
    modifiedSum += modifiedNum;
  }
  console.log(modifiedArray);
  console.log(originalSum);
  console.log(modifiedSum);
}
addSubstract([5, 15, 23, 56, 35]);
