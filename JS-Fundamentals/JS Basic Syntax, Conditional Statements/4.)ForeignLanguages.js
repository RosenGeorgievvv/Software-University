//Write a program, which prints the language, that a given country speaks. You can receive only the following combinations:

// · English is spoken in England and USA;

// · Spanish is spoken in Spain, Argentina, and Mexico;

// · For the others, we should print "unknown";

// Input

// You will receive a single country name.

// Output

// Print the language, which the country speaks, or if it is unknown for your program, print "unknown".

//Solution:

function foreignLanguages(input) {
  let curr = input;

  switch (curr) {
    case "USA":
      console.log("English");
      break;
    case "England":
      console.log("English");
      break;
    case "Spain":
      console.log("Spanish");
      break;
    case "Argentina":
      console.log("Spanish");
      break;
    case "Mexico":
      console.log("Spanish");
      break;
    default:
      console.log("unknown");
  }
}
foreignLanguages("USA");
