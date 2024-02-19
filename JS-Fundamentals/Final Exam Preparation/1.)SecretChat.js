//Task: On the first line of the input, you will receive the concealed message. After that, until the "Reveal" command is given, you will receive strings with instructions for different operations that need to be performed upon the concealed message to interpret it and reveal its actual content. There are several types of instructions, split by ":|:"

// · "InsertSpace:|:{index}":

// o Inserts a single space at the given index. The given index will always be valid.

// · "Reverse:|:{substring}":

// o If the message contains the given substring, cut it out, reverse it and add it at the end of the message.

// o If not, print only "error".

// o This operation should replace only the first occurrence of the given substring if there are two or more occurrences.

// · "ChangeAll:|:{substring}:|:{replacement}":

// o Changes all occurrences of the given substring with the replacement text.

// Input / Constraints

// · On the first line, you will receive a string with a message.

// · On the following lines, you will be receiving commands, split by ":|:".

// Output

// · After each correct set of instructions, print the resulting string.

// · After the "Reveal" command is received, print this message: "You have a new text message: {message}"

//Solution:

function secretChat(arr) {
  let message = arr.shift();

  for (let i = 0; i < arr.length; i++) {
    let currentRow = arr[i].split(":|:");

    if (currentRow[0] === "ChangeAll") {
      let substr = currentRow[1];
      let str = currentRow[2];

      while (message.includes(substr)) {
        let index = message.indexOf(substr);
        let cut = message.substring(index, index + substr.length);
        message = message.replace(cut, str);
      }
      console.log(message);
    } else if (currentRow[0] === "Reverse") {
      let substr = currentRow[1];
      if (message.includes(substr)) {
        let index = message.indexOf(substr);
        let reversed = message
          .substring(index, index + substr.length)
          .split("")
          .reverse()
          .join("");
        let firstSubstring = message.substring(0, index);
        let secondSubstring = message.substring(index + substr.length);
        message = firstSubstring + secondSubstring + reversed;
        console.log(message);
      } else{
        console.log("error");
      }
    } else if (currentRow[0] === "InsertSpace") {
      let index = +currentRow[1];
      let adjust = message.substr(0, index);
      let finalAdjust = message.substr(index);
      message = adjust + " " + finalAdjust;
      console.log(message);
    } else if (currentRow[0] === "Reveal") {
      console.log(`You have a new text message: ${message}`);
      break;
    }
  }
}
secretChat([
  "heVVodar!gniV",

  "ChangeAll:|:V:|:l",

  "Reverse:|:!gnil",

  "InsertSpace:|:5",

  "Reveal",
]);
