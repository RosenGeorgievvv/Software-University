//Task: Write a function that prints a number between 1 and 7 when a day of the week is passed to it as a string and an error message if the string is not recognized.
// The input comes as a single-string argument.
// The output should be returned as a result.


//Solution:

function dayOfWeek(month, year){

    let m = Number(month);
    let y = Number(year)
    let date = new Date(y, m, 0).getDate();
    console.log(date);
}
dayOfWeek("1", "2012")