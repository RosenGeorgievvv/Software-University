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
      } 
  }
solve([
  "heVVodar!gniV",

  "ChangeAll:|:V:|:l",

  "Reverse:|:!gnil",

  "InsertSpace:|:5",

  "Reveal",
]);
