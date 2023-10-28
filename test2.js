function inventory(arr) {
  let heroes = [];

  for (let data of arr) {
    let [name, level, itemsData] = data.split(" / ");
    let obj = {
      name: name,
      level: Number(level),
      items: itemsData ? itemsData.split(", ").join(", ") : "",
    };
    heroes.push(obj);
  }

  heroes.sort((a, b) => a.level - b.level);
  for (let hero of heroes) {
    console.log(`Hero: ${hero.name}`);
    console.log(`level => ${hero.level}`);
    console.log(`items => ${hero.items}`);
  }
}
inventory([
  "Isacc / 25 / Apple, GravityGun",

  "Derek / 12 / BarrelVest, DestructionSword",

  "Hes / 1 / Desolator, Sentinel, Antara",
]);
