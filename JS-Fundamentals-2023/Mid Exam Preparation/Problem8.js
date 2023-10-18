//Task: Write a program that recreates the Memory game.
// On the first line, you will receive a sequence of elements. Each element in the sequence will have a twin. Until the player receives "end" from the console, you will receive strings with two integers separated by a space, representing the indexes of elements in the sequence.
// If the player tries to cheat and enters two equal indexes or indexes which are out of bounds of the sequence, you should add two matching elements at the middle of the sequence in the following format:
// "-{number of moves until now}a"
// Then print this message on the console:
// "Invalid input! Adding additional elements to the board"
// Input
// •	On the first line, you will receive a sequence of elements.
// •	On the following lines, you will receive integers until the command "end".
// Output
// •	Every time the player hit two matching elements, you should remove them from the sequence and print on the console the following message:
// "Congrats! You have found matching elements - {element}!"
// •	If the player hit two different elements, you should print on the console the following message:
// "Try again!"
// •	If the player hit all matching elements before he receives "end" from the console, you should print on the console the following message:
// "You have won in {number of moves until now} turns!"
// •	If the player receives "end" before he hits all matching elements, you should print on the console the following message:
// "Sorry you lose :(
// {the current sequence's state}"
// Constraints
// •	All elements in the sequence will always have a matching element.

function solve(input) {
  let SeqOfElements = input.shift().trim().split(" ");
  let steps = 0;

  while (SeqOfElements.length > 1 && input[0].toLowerCase() !== "end") {
    let [first, second] = input
      .shift()
      .split(" ")
      .map((x) => Number(x));

    steps++;

    if (
      first < 0 ||
      first >= SeqOfElements.length ||
      first === second ||
      second < 0 ||
      second >= SeqOfElements.length
    ) {
      let index = Math.trunc(SeqOfElements.length / 2);
      let symbol = `-${steps}a`;
      SeqOfElements.splice(index, 0, symbol, symbol);
      console.log("Invalid input! Adding additional elements to the board");
    } else {
      let numOne = SeqOfElements[first];
      let numTwo = SeqOfElements[second];
      if (numOne === numTwo) {
        SeqOfElements.splice(first, 1);
        second = SeqOfElements.indexOf(numTwo);
        SeqOfElements.splice(second, 1);
        console.log(`Congrats! You have found matching elements - ${numOne}!`);
      } else if (numOne !== numTwo) {
        console.log("Try again!");
      }
    }
  }
  if (SeqOfElements.length === 0 || SeqOfElements.length === 1) {
    console.log(`You have won in ${steps} turns!`);
  } else {
    console.log(`Sorry you lose :(`);
    console.log(`${SeqOfElements.join(" ")}`);
  }
}
solve(["1 1 2 2 3 3 4 4 5 5", "1 0", "-1 0", "1 0", "1 0", "1 0", "end"]);
