function spaceTravelTask(input) {
  let route = input[0].split("||");
  let fuel = Number(input[1]);
  let ammunition = Number(input[2]);

  for (let command of route) {
    let tokens = command.split(" ");
    let action = tokens[0];

    if (action === "Travel") {
      let distance = Number(tokens[1]);
      if (fuel >= distance) {
        console.log(`The spaceship travelled ${distance} light-years.`);
        fuel -= distance;
      } else {
        console.log("Mission failed.");
        return;
      }
    } else if (action === "Enemy") {
      let enemyArmour = Number(tokens[1]);
      if (ammunition >= enemyArmour) {
        console.log(`An enemy with ${enemyArmour} armour is defeated.`);
        ammunition -= enemyArmour;
      } else if (fuel >= enemyArmour * 2) {
        console.log(`An enemy with ${enemyArmour} armour is outmaneuvered.`);
        fuel -= enemyArmour * 2;
      } else {
        console.log("Mission failed.");
        return;
      }
    } else if (action === "Repair") {
      let addedAmmunition = Number(tokens[1]) * 2;
      let addedFuel = Number(tokens[1]); // Strange that here I should take again the first element
      console.log(`Ammunitions added: ${addedAmmunition}.`);
      console.log(`Fuel added: ${addedFuel}.`);
      ammunition += addedAmmunition;
      fuel += addedFuel;
    } else if (action === "Titan") {
      console.log("You have reached Titan, all passengers are safe.");
      return;
    }
  }
}
spaceTravelTask(["Travel 10||Enemy 30||Repair 15||Titan", "50", "80"]);
