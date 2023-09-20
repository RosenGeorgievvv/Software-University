//Task: Write a program that receives a number of centuries and converts it to years, days, hours, and minutes.

//Solution:

function convert(input) {

    let years = input*100;
    let days = Math.trunc(years * 365.2422);
    let hours = 24 * days;
    let minutes = 60 * hours;

    console.log(`${input} centuries = ${years} `+`years = ${days} ` + `days = ${hours} ` + `hours = ${minutes} minutes`)
}
convert(1);
