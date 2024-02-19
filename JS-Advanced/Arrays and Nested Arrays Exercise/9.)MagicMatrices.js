//Task: Write a function that checks if a given matrix of numbers is magical. A matrix is magical if the sums of the cells of every row and every column are equal.

// The input comes as an array of arrays, containing numbers (number 2D matrix). The input numbers will always be positive.

// The output is a Boolean result indicating whether the matrix is magical or not.

//Solution:

function magic(arr){
 
   let referenceSum = arr[0].reduce((acc, num) => acc + num, 0);

   for (let i = 1; i < arr.length; i++) {
       let rowSum = arr[i].reduce((acc, num) => acc + num, 0);
       if (rowSum !== referenceSum) {
           return false;
       }
   }

   for (let j = 0; j < arr[0].length; j++) {
       let colSum = 0;
       for (let i = 0; i < arr.length; i++) {
           colSum += arr[i][j];
       }
       if (colSum !== referenceSum) {
           return false;
       }
   }

   return true;
}
console.log(magic([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]));