//Task: Write a function to sum a range of numeric elements from an array.

// The function takes three parameters - the first is an array, the second is the start index and the third is the end index. Both indexes are inclusive. Have in mind that the array elements may not be of type Number and cast everything. Implement the following error handling:

// · If the first element is not an array, return NaN

// · If the start index is less than zero, consider its value to be a zero

// · If the end index is outside the bounds of the array, assume it points to the last index of the array

// Input / Output

// Your function must take three parameters. As output, return the sum.


//Solution:

function subSumTask(arr, start, end) {
    if (!Array.isArray(arr)) return NaN;
    start = start >= 0 ? start : 0
    end = end < 0 ? 0 : (arr.length - 1 < end) ? arr.length - 1 : end;

    return arr.slice(start, end + 1).map(n => Number(n)).reduce((acc, n) => acc + n, 0);
}

console.log(subSumTask([10, 20, 30, 40, 50, 60], 3, 300));
console.log(subSumTask([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1));
console.log(subSumTask([10, 'twenty', 30, 40], 0, 2));
console.log(subSumTask([], 1, 2));
console.log(subSumTask('text', 0, 2));