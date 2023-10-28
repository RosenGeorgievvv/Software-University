function inventory(arr) {
  let heroes = [];
  arr.forEach((x) => {
    const [name, level, items] = x.split("/");
    heroes.push({
      name,
      level: Number(level),
      items: items
        .split(", ")
        .map((x) => x.trim())
        .sort((x, y) => x.localeCompare(y))
        .join(", "),
    });
  });

  heroes
    .sort((y, x) => x.level - y.level)
    .forEach((x) =>
      console.log(`Hero: ${x.name}
level => ${x.level}
items => ${x.items}`)
    );
}
