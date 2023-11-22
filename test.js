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
      } 
  }
solve([
  "heVVodar!gniV",

  "ChangeAll:|:V:|:l",

  "Reverse:|:!gnil",

  "InsertSpace:|:5",

  "Reveal",
]);
