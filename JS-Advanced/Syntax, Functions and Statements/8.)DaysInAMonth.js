//Task: Write a JavaScript function to get the number of days in a month.
// The input comes as two numeric parameters. The first element is the month, the second is the year.
// The output must return the number of days in a month for a given year.


//Solution:

function daysInMonth(month, year){
    console.log(new Date(year, month, 0).getDate());
}
daysInMonth("1", "2012")