//Task: You will be given a number that will be the distance in meters. Write a program that converts meters to kilometers formatted to the second decimal point.2

//Solution:

function convert(num){

    let converted = num / 1000;
    console.log(converted.toFixed(2)); 
}
convert(1852)