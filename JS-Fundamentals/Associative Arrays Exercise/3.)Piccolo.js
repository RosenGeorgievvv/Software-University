//Task:Write a function that:

// · Records a car number for every car that enters the parking lot

// · Removes a car number when the car goes out

// · Input will be an array of strings in format [direction, carNumber]

// Print the output with all car numbers which are in the parking lot sorted in ascending by number.

// If the parking lot is empty, print: "Parking Lot is Empty".

//Solution:

function piccolo(input) {
  let parkingLot = new Set();

  for (let entry of input) {
    let [direction, carNumber] = entry.split(", ");

    if (direction === "IN") {
      parkingLot.add(carNumber);
    } else if (direction === "OUT") {
      parkingLot.delete(carNumber);
    }
  }

  let sortedCarNumbers = Array.from(parkingLot).sort();

  if (sortedCarNumbers.length === 0) {
    console.log("Parking Lot is Empty");
  } else {
    console.log(sortedCarNumbers.join("\n"));
  }
}
piccolo([
  "IN, CA2844AA",

  "IN, CA1234TA",

  "OUT, CA2844AA",

  "IN, CA9999TT",

  "IN, CA2866HI",

  "OUT, CA1234TA",

  "IN, CA2844AA",

  "OUT, CA2866HI",

  "IN, CA9876HH",

  "IN, CA2822UU",
]);
