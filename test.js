function solve(input) {
  let hp = 100;
  let loot = 0;
  let rooms = input.split("|");

  for (let i = 0; i < rooms.length; i++) {
    let room = rooms[0].split(" ");
    let type = room[0];
    let num = Number(room[1]);

    if (type == "potion") {
      console.log();
    } else if (type == "chest") {
      loot += num;
      console.log(`You found ${num} bitcoins.`);
    } else {
        hp -= num;
        if(hp <= 0){
            console.log(`You died! Killed by ${type}`);
            console.log(`Best room: ${i + 1}`);
        }else{
            console.log(`You slayed ${type}`);
        }
    }
  }
  console.log("You've made it!");
  console.log(`Bitcoins: ${loot}`);
  console.log(`Health: ${hp}`);

}
solve("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");
