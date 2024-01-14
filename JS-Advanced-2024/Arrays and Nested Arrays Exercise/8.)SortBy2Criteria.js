//Task: Write a function that orders a given array of strings, by a length in ascending order as primary criteria, and by alphabetical value in ascending order as second criteria. The comparison should be case-insensitive.

// The input comes as an array of strings.

// The output is the elements of the ordered array of strings, printed each on a new line.


//Solution:

function sortByCrit(arr){

    let sortedArray = arr.sort((a, b) => {

        let length = a.length - b.length;

        if(length === 0){
            let lowA = a.toLowerCase();
            let lowB = b.toLowerCase();
            return lowA.localeCompare(b);
        }
        return length;
    });
sortedArray.forEach(e => console.log(e));

}
sortByCrit(['alpha',
'beta',
'gamma'])