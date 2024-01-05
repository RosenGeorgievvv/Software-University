//Task: Write a function that receives three parameters – an array of pie flavors as strings, two target flavors as strings. The result of the function should be a new array, containing a section of the original array, starting at the first flavor parameter, and ending at (and including) the second flavor parameter.
// The input comes as three arguments:
// An array of strings, representing pie flavours
// Two more strings, representing the start and end of the section, respectively
// The output is the return value of the function and should be an array of strings.


//Solution:

function pieceOfPie(pies, start, end){

    let firstPart = pies.indexOf(start);
    let secondPart = pies.indexOf(end) + 1;
    let result = pies.slice(firstPart, secondPart);
    return result;
}
pieceOfPie(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie')