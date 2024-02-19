//Task: Write a program, which receives a number and prints the corresponding name of the day of the week (in English).

// If the number is NOT a valid day, print: "Invalid day!".

//Solution:

function dayOfWeek(input) {
  let variants = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  if (input >= 1 && input <= 7) {
    console.log(variants[input - 1]);
  } else {
    console.log("Invalid day!");
  }
}
dayOfWeek(3);
