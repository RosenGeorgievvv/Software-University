//Task: Write a function that orders an array of strings, by their length in ascending order as primary criteria, and by alphabetical value in ascending order as second criteria. The comparison should be case-insensitive.

// The input comes as an array of strings.

// The output is the ordered array of strings, each on a separate line.

//Solution:

function sortBy2Crit(arr){

let sorted = (a, b) =>{
    if(a.length !== b.length){
        return a.length - b.length;
    }
    return a.toLowerCase().localeCompare(b.toLowerCase());
}
arr.sort(sorted);
console.log(arr.join('\n'));

}
sortBy2Crit(['alpha','beta','gamma'])