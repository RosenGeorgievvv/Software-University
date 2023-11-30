function solve(arr) {
  let message = arr.shift();

  for (let i = 0; i < arr.length; i++) {
    let [command, firstPart, secondPart] = arr[i].split(":|:");

    if (command === "ChangeAll") {
      let removeIndex = firstPart;
      let addIndex = secondPart;

      while (message.includes(removeIndex)) {
        let index = message.indexOf(removeIndex);
        let cut = message.substr(index, index + removeIndex.length);
        message = message.replace(cut, addIndex);
      }
    }
  }
}
solve([
  "heVVodar!gniV",

  "ChangeAll:|:V:|:l",

  "Reverse:|:!gnil",

  "InsertSpace:|:5",

  "Reveal",
]);
