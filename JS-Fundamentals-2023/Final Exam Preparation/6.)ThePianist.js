//Task: You are a pianist, and you like to keep a list of your favorite piano pieces. Create a program to help you organize it and add, change, remove pieces from it!
// On the first line of the standard input, you will receive an integer n – the number of pieces you will initially have. On the next n lines, the pieces themselves will follow with their composer and key, separated by "|" in the following format: "{piece}|{composer}|{key}".
// Then, you will be receiving different commands, each on a new line, separated by "|", until the "Stop" command is given:
// •	"Add|{piece}|{composer}|{key}":
// o	You need to add the given piece with the information about it to the other pieces and print:
// "{piece} by {composer} in {key} added to the collection!"
// o	If the piece is already in the collection, print:
// "{piece} is already in the collection!"
// •	"Remove|{piece}":
// o	If the piece is in the collection, remove it and print:
// "Successfully removed {piece}!"
// o	Otherwise, print:
// "Invalid operation! {piece} does not exist in the collection."
// •	"ChangeKey|{piece}|{new key}":
// o	If the piece is in the collection, change its key with the given one and print:
// "Changed the key of {piece} to {new key}!"
// o	Otherwise, print:
// "Invalid operation! {piece} does not exist in the collection."
// Upon receiving the "Stop" command, you need to print all pieces in your collection in the following format:
// "{Piece} -> Composer: {composer}, Key: {key}"
// Input/Constraints
// •	You will receive a single integer at first – the initial number of pieces in the collection.
// •	For each piece, you will receive a single line of text with information about it.
// •	Then you will receive multiple commands in the way described above until the command "Stop".

//Solution:

function thePianist(arr) {
  let piecesCount = Number(arr.shift());
  let organizer = {};

  for (let i = 0; i < piecesCount; i++) {
    let [name, composer, key] = arr.shift().split("|");

    organizer[name] = {
      composer,
      key,
    };
  }

  while (arr[0] !== "Stop") {
    let tokens = arr.shift().split("|");
    let command = tokens[0];
    let name = tokens[1];
    if (command === "Add") {
      if (organizer[name] !== undefined) {
        console.log(`${name} is already in the collection!`);
      } else {
        organizer[name] = {
          composer: tokens[2],
          key: tokens[3],
        };
        console.log(
          `${name} by ${tokens[2]} in ${tokens[3]} added to the collection!`
        );
      }
    } else if (command === "Remove") {
      if (organizer[name] === undefined) {
        console.log(
          `Invalid operation! ${name} does not exist in the collection.`
        );
      } else {
        delete organizer[name];
        console.log(`Successfully removed ${name}!`);
      }
    } else if (command === "ChangeKey") {
      if (organizer[name] === undefined) {
        console.log(
          `Invalid operation! ${name} does not exist in the collection.`
        );
      } else {
        organizer[name].key = tokens[2];
        console.log(`Changed the key of ${name} to ${tokens[2]}!`);
      }
    }
  }
  for (let [name, piece] of Object.entries(organizer)) {
    console.log(`${name} -> Composer: ${piece.composer}, Key: ${piece.key}`);
  }
}
thePianist([
  "3",
  "Fur Elise|Beethoven|A Minor",
  "Moonlight Sonata|Beethoven|C# Minor",
  "Clair de Lune|Debussy|C# Minor",
  "Add|Sonata No.2|Chopin|B Minor",
  "Add|Hungarian Rhapsody No.2|Liszt|C# Minor",
  "Add|Fur Elise|Beethoven|C# Minor",
  "Remove|Clair de Lune",
  "ChangeKey|Moonlight Sonata|C# Major",
  "Stop",
]);
