//Task: You’re tasked to create and print objects from a text table.

// You will receive the input as an array of strings, where each string represents a table row, with values on the row separated by pipes " | " and spaces.

// The table will consist of exactly 3 columns "Town", "Latitude" and "Longitude". The latitude and longitude columns will always contain valid numbers. Check the examples to get a better understanding of your task.

// The output should be objects. Latitude and longitude must be parsed to numbers and formatted to the second decimal point!

//Solution:

function townsTask(arr) {
  class Town {
    constructor(town, latitude, longitude) {
      this.town = town;
      this.latitude = latitude.toFixed(2);
      this.longitude = longitude.toFixed(2);
    }

    printInfo() {
        console.log(`{ town: '${this.town}', latitude: '${this.latitude}', longitude: '${this.longitude}' }`);
    }
  }

  let townInfo = [];

  for (let i = 0; i < arr.length; i++) {
    let current = arr[i].split(" | ");
    let town = current[0];
    let latitude = Number(current[1]);
    let longitude = Number(current[2]);

    let info = new Town(town, latitude, longitude);
    townInfo.push(info);
  }
  townInfo.forEach((i) => i.printInfo());
}
townsTask(["Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"]);
