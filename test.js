function solve(input) {
  let pirate = input.shift().split(">").map(Number);
  let warship = input.shift().split(">").map(Number);
  let maxHp = Number(input.shift());

  for (let current of input) {
    let tokens = current.split(" ");
    let command = tokens.shift();

    if (command == "Retire") {
      break;
    } else if (command == "Fire") {
      let index = Number(tokens[0]);
      let damage = Number(tokens[1]);

      if (index < 0 || index >= warship.length) {
        continue;
      }
      warship[index] -= damage;
      if (warship[index] <= 0) {
        console.log("You won! The enemy ship has sunken.");
        return;
      }
    } else if (command == "Defend") {
      let start = Number(tokens[0]);
      let end = Number(tokens[1]);
      let damage = Number(tokens[2]);

      if (
        start < 0 ||
        start >= pirate.length ||
        end < 0 ||
        end >= pirate.length
      ) {
        continue;
      }

      for (let i = start; i <= end; i++) {
        pirate[i] -= damage;
        if (pirate[i] <= 0) {
          console.log("You lost! The pirate ship has sunken.");
          return;
        }
      }
    } else if (command == "Repair") {

        let index = Number(tokens[0]);
        let hp = Number(tokens[1]);

        if(index < 0 || index >= pirate.length){
            continue;
        }
    } else if (command == "Status") {
    }
  }
  console.log(warship);
}

solve([
  "12>13>11>20>66",
  "12>22>33>44>55>32>18",
  "70",
  "Fire 2 11",
  "Fire 8 100",
  "Defend 3 6 11",
  "Defend 0 3 5",
  "Repair 1 33",
  "Status",
  "Retire",
]);
