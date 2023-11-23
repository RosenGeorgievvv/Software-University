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
    } 
}
imitationGame(["zzHe", "ChangeAll|z|l", "Insert|2|o", "Move|3", "Decode"]);
