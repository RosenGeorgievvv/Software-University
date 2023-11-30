function solve(arr) {
  let message = arr.shift();

  for (let i = 0; i < arr.length; i++) {
    let [command, firstPart, secondPart] = arr[i].split(":|:");

    if (command === "ChangeAll") {
      let removeIndex = firstPart;
      let addIndex = secondPart;

      while (message.includes(removeIndex)) {
        message = message.replace(removeIndex, addIndex);
      }
      console.log(message);
    } else if (command === "Reverse") {
      if (message.includes(firstPart)) {
        let index = message.indexOf(firstPart);
        let reversed = message
          .substr(index, firstPart.length)
          .split("")
          .reverse()
          .join("");
        let firstCut = message.substr(0, index);
        let secondCut = message.substr(index + firstPart.length);
        message = firstCut + secondCut + reversed;
        console.log(message);
      } else {
        console.log("error");
      }
    } else if (command === "InsertSpace") {
      let index = +firstPart;
      let space = message.substr(0, index);
      let result = message.substr(index);
      message = space + " " + result;
      console.log(message);
    } else if (command === "Reveal") {
      console.log(`You have a new text message: ${message}`);
      break;
      
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
