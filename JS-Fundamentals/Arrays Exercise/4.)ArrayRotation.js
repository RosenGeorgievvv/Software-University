//Task: Write a function that receives an array and the number of rotations you have to perform.

// Note: Depending on the number of rotations, the first element goes to the end.

// Output

// Print the resulting array elements separated by a single space.

//Solution:

function rotateArray(arr, rotations) {

    let actualRotations = rotations % arr.length;
    let rotatedArr = [...arr.slice(actualRotations, arr.length), ...arr.slice(0, actualRotations)];
    console.log(rotatedArr.join(' '));
}
rotateArray([51, 47, 32, 61, 21], 2);
