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


function computerStore(input){

    let withoutTaxes = 0;
    let command = input.pop().toLowerCase();
    let withTaxes = 0;
    let totalPrice = 0;

    if(input.length === 0){
        return console.log("Invalid order!");
    }

    for(let price of input){
        let currentPrice = Number(price);

        if(price > 0){
            withoutTaxes += currentPrice;
        }else{
            console.log("Invalid price!");
            continue;
        }
    }
    if(withoutTaxes === 0){
        return console.log("Invalid order!");
    }
    withTaxes = withoutTaxes * 0.2;
    totalPrice = withTaxes + withoutTaxes;

    if(command === "special"){
        totalPrice = totalPrice - (totalPrice * 0.1);
    }
    console.log(`Congratulations you've just bought a new computer!`);
    console.log(`Price without taxes: ${withoutTaxes.toFixed(2)}$`);
    console.log(`Taxes: ${withTaxes.toFixed(2)}$`);
    console.log("-----------");
    console.log(`Total price: ${totalPrice.toFixed(2)}$`);
}
computerStore([

    '1050',
    
    '200',
    
    '450',
    
    '2',
    
    '18.50',
    
    '16.86',
    
    'special'
    
    ])