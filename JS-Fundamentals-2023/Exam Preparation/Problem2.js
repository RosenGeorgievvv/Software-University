//Task:You have initial health 100 and initial bitcoins 0. You will be given a string representing the dungeon's rooms. Each room is separated with '|' (vertical bar): "room1|room2|room3…"

// Each room contains a command and a number, separated by space. The command can be:

// · "potion"

// o You are healed with the number in the second part. But your health cannot exceed your initial health (100).

// o First print: "You healed for {amount} hp."

// o After that, print your current health: "Current health: {health} hp."

// · "chest"

// o You've found some bitcoins, the number in the second part.

// o Print: "You found {amount} bitcoins."

// · In any other case, you are facing a monster, which you will fight. The second part of the room contains the attack of the monster. You should remove the monster's attack from your health.

// o If you are not dead (health <= 0), you've slain the monster, and you should print: "You slayed {monster}."

// o If you've died, print "You died! Killed by {monster}." and your quest is over. Print the best room you've manage to reach: "Best room: {room}"

// If you managed to go through all the rooms in the dungeon, print on the following three lines:

// "You've made it!"

// "Bitcoins: {bitcoins}"

// "Health: {health}"

// Input / Constraints

// You receive a string representing the dungeon's rooms, separated with '|' (vertical bar): "room1|room2|room3…".

//Solution:

function muOnline(input) {
    let initialHealth = 100;
    let initialBitcoins = 0;
    let currentRoom = 0;
    let rooms = input.split("|");
  
    for (let i = 0; i < rooms.length; i++) {
      currentRoom++;
      let [command, amount] = rooms[i].split(" ");
      amount = parseInt(amount);
  
      if (command === "potion") {
        let healAmount = Math.min(amount, 100 - initialHealth);
        initialHealth += healAmount;
        console.log(`You healed for ${healAmount} hp.`);
        console.log(`Current health: ${initialHealth} hp.`);
      } else if (command === "chest") {
        initialBitcoins += amount;
        console.log(`You found ${amount} bitcoins.`);
      } else {
        initialHealth -= amount;
        if (initialHealth <= 0) {
          console.log(`You died! Killed by ${command}.`);
          console.log(`Best room: ${currentRoom}`);
          return;
        } else {
          console.log(`You slayed ${command}.`);
        }
      }
    }
  
    console.log(`You've made it!`);
    console.log(`Bitcoins: ${initialBitcoins}`);
    console.log(`Health: ${initialHealth}`);
  }
solve(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
