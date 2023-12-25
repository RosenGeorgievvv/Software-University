//Task: Write a function that takes a single argument as an input. Check the type of input argument. If it is a number, assume it is the radius of a circle and calculate the circle area. Print the area rounded to two decimal places.
// If the argument type is NOT a number, print the following text on the console:
// `We can not calculate the circle area, because we receive a {type of argument}.`

//Solution:

function circleArea(input) {
  let inputType = typeof input;
  let result;

  
  if (inputType === "number") {
    result = Math.pow(input, 2) * Math.PI;
    console.log(result.toFixed(2));
  } else {
    console.log( `We can not calculate the circle area, because we receive a ${inputType}.`);
  }
}
circleArea(5);
