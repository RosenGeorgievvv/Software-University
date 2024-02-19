//Task: Write a function that finds the number of equal neighbour pairs inside a matrix of variable size and type (numbers or strings).
// The input comes as an array of arrays, containing string elements (2D matrix of strings).
// The output is the return value of your function. Save the number of equal pairs you find and return it.

//Solution:

function equals(arr) {

    let counter = 0;
    
    for (let i = 0; i < arr.length; i++) {
        let line = arr[i];
        for (let j = 0; j < line.length; j++) {
            let col = line[j];

            if (i !== arr.length - 1) {
                if (col === line[j + 1]) {
                    counter++;
                }
                if (col === arr[i + 1][j]) {
                    counter++;
                }
            }
            else if (col === line[j + 1] || col === arr[i][j + 1]) {
                counter++;
            }
        }
    }
    console.log(counter);
}
equals([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']])