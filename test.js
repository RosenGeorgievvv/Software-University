function solve(input) {
  let pirate = input.shift().split(">").map(Number);
  let warship = input.shift().split(">").map(Number);
  let maxHp = input.shift().map(Number);

  for (let current of input) {
    let tokens = current.split(" ");
    let command = tokens.shift();

    if (command == "Retire") {
      break;
    } else if(command == "Fire"){
        let index = Number(tokens[0]);
        let damage = Number(tokens[1]);

        if(index < 0 || index >= warship.length){
            continue;
        }
    } else if (command == "Defend") {
    } else if (command == "Repair") {
    } else if (command == "Status") {
    }
  }
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
