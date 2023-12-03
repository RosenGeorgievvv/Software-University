function passwordManipulator(input) {
    let password = input.shift();
  
    function isCharValid(char) {
      const ascii = char.charCodeAt(0);
      return (ascii >= 65 && ascii <= 90) || (ascii >= 97 && ascii <= 122) || (ascii >= 48 && ascii <= 57) || char === '_';
    }
  
    function isValidPassword() {
      if (password.length < 8) {
        console.log("Password must be at least 8 characters long!");
        return false;
      }
  
      for (let i = 0; i < password.length; i++) {
        const char = password[i];
        if (!isCharValid(char)) {
          console.log("Password must consist only of letters, digits and _!");
          return false;
        }
        if (char >= 'A' && char <= 'Z') {
          break;
        }
      }
  
      for (let i = 0; i < password.length; i++) {
        const char = password[i];
        if (char >= 'a' && char <= 'z') {
          break; 
        }
      }
  
      for (let i = 0; i < password.length; i++) {
        const char = password[i];
        if (char >= '0' && char <= '9') {
          break;
        }
      }
      console.log("Password is valid!");
      return true;
    }
  
    function processCommand(command) {
      const [action, ...params] = command.split(' ');
      switch (action) {
        case 'Make':
          const [caseType, index] = params;
          caseType === 'Upper' ? password = password.substring(0, index) + password[index].toUpperCase() + password.substring(index + 1) : password = password.substring(0, index) + password[index].toLowerCase() + password.substring(index + 1);
          console.log(password);
          break;
        case 'Insert':
          const [insertIndex, insertCharValue] = params;
          if (insertIndex >= 0 && insertIndex <= password.length) {
            password = password.substring(0, insertIndex) + insertCharValue + password.substring(insertIndex);
            console.log(password);
          }
          break;
        case 'Replace':
          const [replaceCharValue, replaceValue] = params;
          const charIndex = password.indexOf(replaceCharValue);
          if (charIndex !== -1) {
            const newChar = String.fromCharCode(replaceCharValue.charCodeAt(0) + Number(replaceValue));
            password = password.split(replaceCharValue).join(newChar);
            console.log(password);
          }
          break;
        case 'Validation':
          isValidPassword();
          break;
        default:
          break;
      }
    }
  
    input.forEach(processCommand);
  }
  
  const data = [
    "invalidpassword*",
    "Add 2 p",
    "Replace i -50",
    "Replace * 10",
    "Make Upper 2",
    "Validation",
    "Complete",
  ];
  
  passwordManipulator(data);