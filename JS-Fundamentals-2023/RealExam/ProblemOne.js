function passwordValidator(arr) {
  let incomePassword = arr.shift();

  function asciiValidation(char) {
    let asciiStart = char.charCodeAt(0);

    return (
      (asciiStart >= 65 && asciiStart <= 90) ||
      (asciiStart >= 97 && asciiStart <= 122) ||
      (asciiStart >= 48 && asciiStart <= 57) ||
      char === "_"
    );
  }

  function isPasswordValid() {
    if (incomePassword.length < 8) {
      console.log("Password must be at least 8 characters long!");
    } 
    

    for (let i = 0; i < incomePassword.length; i++) {
      let symbol = incomePassword[i];
      if (asciiValidation(symbol)) {
        console.log("Password must consist only of letters, digits and _!");
      }
      if (symbol >= "A" && symbol <= "Z") {
        break;
      }
    }
    for (let i = 0; i < incomePassword.length; i++) {
      let symbol = incomePassword[i];
      if (symbol >= "a" && symbol <= "z") {
        break;
      }
    }
    for (let i = 0; i < incomePassword.length; i++) {
      let digit = incomePassword[i];
      if (digit >= "0" && digit <= "9") {
        break;
      }
    }
    console.log("Password is valid!");
    return true;
  }

  function commandIteration(command) {
    let [action, ...params] = command.split(" ");
    switch (action) {
      case "Make":
        let [caseType, index] = params;
        caseType === "Upper"
          ? (incomePassword =
              incomePassword.substring(0, index) +
              incomePassword[index].toUpperCase() +
              incomePassword.substring(index + 1))
          : (incomePassword =
              incomePassword.substring(0, index) +
              incomePassword[index].toLowerCase() +
              incomePassword.substring(index + 1));
        console.log(incomePassword);
        break;
      case "Insert":
        let [insertIndex, insertCharValue] = params;
        if (insertIndex >= 0 && insertIndex <= incomePassword.length) {
          incomePassword =
            incomePassword.substring(0, insertIndex) +
            insertCharValue +
            incomePassword.substring(insertIndex);
          console.log(incomePassword);
        }
        break;
      case "Replace":
        let [replaceCharValue, replaceValue] = params;
        let charIndex = incomePassword.indexOf(replaceCharValue);
        if (charIndex !== -1) {
          let newChar = String.fromCharCode(
            replaceCharValue.charCodeAt(0) + Number(replaceValue)
          );
          incomePassword = incomePassword.split(replaceCharValue).join(newChar);
          console.log(incomePassword);
        }
        break;
      case "Validation":
        isPasswordValid();
        break;
      default:
        break;
    }
  }
  arr.forEach(comm);
}
passwordValidator([
  "invalidpassword*",

  "Add 2 p",

  "Replace i -50",

  "Replace * 10",

  "Make Upper 2",

  "Validation",

  "Complete",
]);
