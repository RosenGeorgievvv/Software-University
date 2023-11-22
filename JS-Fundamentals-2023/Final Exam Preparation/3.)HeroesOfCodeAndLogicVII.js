//Task: You got your hands on the most recent update on the best MMORPG of all time – Heroes of Code and Logic. You want to play it all day long! So cancel all other arrangements and create your party!

// On the first line of the standard input, you will receive an integer n – the number of heroes that you can choose for your party. On the next n lines, the heroes themselves will follow with their hit points and mana points separated by a single space in the following format:

// "{hero name} {HP} {MP}"

// - HP stands for hit points and MP for mana points

// - a hero can have a maximum of 100 HP and 200 MP

// After you have successfully picked your heroes, you can start playing the game. You will be receiving different commands, each on a new line, separated by " – ", until the "End" command is given.

// There are several actions that the heroes can perform:

// "CastSpell – {hero name} – {MP needed} – {spell name}"

// · If the hero has the required MP, he casts the spell, thus reducing his MP. Print this message:

// o "{hero name} has successfully cast {spell name} and now has {mana points left} MP!"

// · If the hero is unable to cast the spell print:

// o "{hero name} does not have enough MP to cast {spell name}!"

// "TakeDamage – {hero name} – {damage} – {attacker}"

// · Reduce the hero HP by the given damage amount. If the hero is still alive (his HP is greater than 0) print:

// o "{hero name} was hit for {damage} HP by {attacker} and now has {current HP} HP left!"

// · If the hero has died, remove him from your party and print:

// o "{hero name} has been killed by {attacker}!"

// "Recharge – {hero name} – {amount}"

// · The hero increases his MP. If it brings the MP of the hero above the maximum value (200), MP is increased to 200. (the MP can't go over the maximum value).

// · Print the following message:

// o "{hero name} recharged for {amount recovered} MP!"

// "Heal – {hero name} – {amount}"

// · The hero increases his HP. If a command is given that would bring the HP of the hero above the maximum value (100), HP is increased to 100 (the HP can't go over the maximum value).

// · Print the following message:

// o "{hero name} healed for {amount recovered} HP!"

// Input

// · On the first line of the standard input, you will receive an integer n

// · On the following n lines, the heroes themselves will follow with their hit points and mana points separated by a space in the following format

// · You will be receiving different commands, each on a new line, separated by " – ", until the "End" command is given

// Output

// · Print all members of your party who are still alive, in the following format (their HP/MP need to be indented 2 spaces):

// "{hero name}

// HP: {current HP}

// MP: {current MP}"

// Constraints

// · The starting HP/MP of the heroes will be valid, 32-bit integers will never be negative or exceed the respective limits.

// · The HP/MP amounts in the commands will never be negative.

// · The hero names in the commands will always be valid members of your party. No need to check that explicitly.

//Solution:

function heroesOfCodeLogic(input) {
  let actions = {
    CastSpell: castSpell,
    TakeDamage: takeDamage,
    Recharge: recharge,
    Heal: heal,
  };

  let numberOfHeroes = Number(input.shift());
  let heroes = {};

  for (let i = 0; i < numberOfHeroes; i++) {
    let [heroName, hitPoints, manaPoints] = input.shift().split(" ");
    hitPoints = Number(hitPoints);
    manaPoints = Number(manaPoints);

    heroes[heroName] = {
      hitPoints,
      manaPoints,
    };
  }

  while (input[0] !== "End") {
    let tokens = input.shift().split(" - ");
    let command = tokens[0];
    let action = actions[command];
    action(tokens[1], tokens[2], tokens[3]);
  }

  function heal(heroName, amount) {
    amount = Number(amount);
    let hero = heroes[heroName];
    let oldValue = hero.hitPoints;
    hero.hitPoints = Math.min(100, hero.hitPoints + amount);
    console.log(`${heroName} healed for ${hero.hitPoints - oldValue} HP!`);
  }

  function castSpell(heroName, mpNeeded, spellName) {
    mpNeeded = Number(mpNeeded);
    let hero = heroes[heroName];

    if (hero.manaPoints >= mpNeeded) {
      hero.manaPoints -= mpNeeded;

      console.log(
        `${heroName} has successfully cast ${spellName} and now has ${hero.manaPoints} MP!`
      );
    } else {
      console.log(`${heroName} does not have enough MP to cast ${spellName}!`);
    }
  }

  function takeDamage(heroName, damage, attacker) {
    damage = Number(damage);
    let hero = heroes[heroName];

    hero.hitPoints -= damage;

    if (hero.hitPoints > 0) {
      console.log(
        `${heroName} was hit for ${damage} HP by ${attacker} and now has ${hero.hitPoints} HP left!`
      );
    } else {
      delete heroes[heroName];
      console.log(`${heroName} has been killed by ${attacker}!`);
    }
  }

  function recharge(heroName, amount) {
    amount = Number(amount);
    let hero = heroes[heroName];

    let oldValue = hero.manaPoints;
    hero.manaPoints = Math.min(200, hero.manaPoints + amount);

    console.log(`${heroName} recharged for ${hero.manaPoints - oldValue} MP!`);
  }

  let sortedHeroes = Object.entries(heroes).sort(sortingHeroes);

  function sortingHeroes(a, b) {
    let [aName, aInfo] = a;
    let [bName, bInfo] = b;
    let byHealthDescending = bInfo.hitPoints - aInfo.hitPoints;

    if (byHealthDescending === 0) {
      return aName.localeCompare(bName);
    }

    return byHealthDescending;
  }
  for (let [heroName, hero] of Object.entries(heroes)) {
    console.log(`${heroName}`);
    console.log(`  HP: ${hero.hitPoints}`);
    console.log(`  MP: ${hero.manaPoints}`);
  }
}
heroesOfCodeLogic([
  "2",
  "Solmyr 85 120",
  "Kyrre 99 50",
  "Heal - Solmyr - 10",
  "Recharge - Solmyr - 50",
  "TakeDamage - Kyrre - 66 - Orc",
  "CastSpell - Kyrre - 15 - ViewEarth",
  "End",
]);
