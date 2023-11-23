function imitationGame(arr) {
  let message = arr.shift();

  for (let line of arr) {
    let [command, firstEl, secondEl] = line.split("|");
    if (command === "ChangeAll") {
      if (message.includes(firstEl)) {
        let removeStr = firstEl;
        let replaceStr = secondEl;
        message = message.split(removeStr).join(replaceStr);
      }
    } else if (command === "Insert") {
      let index = Number(firstEl);
      let value = secondEl;

      let firstCut = message.substr(0, index);
      let secondCut = message.substr(index);
      message = firstCut.concat(value, secondCut);
    } else if (command === "Move") {
      let lettersCount = Number(firstEl);

      let firstSubstr = message.substr(0, lettersCount);
      let secondSubstr = message.substr(lettersCount);

      message = secondSubstr + firstSubstr;
    } else if (command === "Decode") {
      return;
    }
  }
  console.log(`The decrypted message is: ${message}`);
}
imitationGame(["zzHe", "ChangeAll|z|l", "Insert|2|o", "Move|3", "Decode"]);
