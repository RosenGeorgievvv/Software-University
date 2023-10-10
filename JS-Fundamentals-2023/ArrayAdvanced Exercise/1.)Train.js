//Тask:You will be given an array of strings.

// The first element will be a string containing wagons (numbers). Each number inside the string represents the number of passengers that are currently in a wagon.

// The second element in the array will be the max capacity of each wagon (single number).

// The rest of the elements will be commands in the following format:

// · Add {passengers} – add a wagon to the end with the given number of passengers.

// · {passengers} - find an existing wagon to fit all the passengers (starting from the first wagon)

// At the end, print the final state of the train (all the wagons separated by a space).

//Solution:

function train(arr) {
  let wagons = arr
    .shift()
    .split(" ")
    .map((x) => Number(x));
  let maxCapacity = arr.shift();

  for (let i = 0; i < arr.length; i++) {
    let splittedArr = arr[i].split(" ");
    let command = splittedArr[0];
    let value = splittedArr[1];

    if (splittedArr.length === 2 && command === "Add") {
      wagons.push(value);
    } else {
      let people = Number(splittedArr[0]);
      for (let m = 0; m < wagons.length; m++) {
        if (people + wagons[m] <= maxCapacity) {
          wagons[m] += people;
          break;
        }
      }
    }
  }
  console.log(wagons.join(" "));
}
train(["32 54 21 12 4 0 23", "75", "Add 10", "Add 0", "30", "10", "75"]);
