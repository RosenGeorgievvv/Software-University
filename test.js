function replaceCharAtIndex(str, newChar, index) {
    return str.slice(0, index) + newChar + str.slice(index + 1);
}

function insertCharAtIndex(str, insertChar, index) {
    return str.slice(0, index) + insertChar + str.slice(index);
}

function containsOnlyLettersDigitsUnderscore(password) {
    return /^[a-zA-Z0-9_]+$/.test(password);
}

function containsUpperCaseLetter(password) {
    return /[A-Z]/.test(password);
}

function containsLowerCaseLetter(password) {
    return /[a-z]/.test(password);
}

function containsDigit(password) {
    return /\d/.test(password);
}

function validatePassword(password) {
    const isValid =
        password.length >= 8 &&
        containsOnlyLettersDigitsUnderscore(password) &&
        containsUpperCaseLetter(password) &&
        containsLowerCaseLetter(password) &&
        containsDigit(password);

    if (!isValid) {
        console.log('Invalid password');
        return false;
    }

    console.log('Password is valid');
    return true;
}

function processCommand(command, password) {
    const commandArgs = command.split(' ');
    const action = commandArgs[0];

    switch (action) {
        case 'Make':
            const makeAction = commandArgs[1];
            const makeIndex = parseInt(commandArgs[2]);

            if (makeIndex >= 0 && makeIndex < password.length) {
                password = makeAction === 'Upper'
                    ? replaceCharAtIndex(password, password[makeIndex].toUpperCase(), makeIndex)
                    : replaceCharAtIndex(password, password[makeIndex].toLowerCase(), makeIndex);

                console.log(password);
            }
            break;

        case 'Insert':
            const insertIndex = parseInt(commandArgs[1]);
            const insertChar = commandArgs[2];

            if (insertIndex >= 0 && insertIndex <= password.length) {
                password = insertCharAtIndex(password, insertChar, insertIndex);
                console.log(password);
            }
            break;

        case 'Replace':
            const replaceChar = commandArgs[1][0];
            const replaceValue = parseInt(commandArgs[2]);

            if (password.includes(replaceChar)) {
                const newCharValue = replaceChar.charCodeAt(0) + replaceValue;
                const newChar = String.fromCharCode(newCharValue);
                password = password.replace(replaceChar, newChar);
                console.log(password);
            }
            break;

        case 'Validation':
            validatePassword(password);
            break;

        default:
            break;
    }
}

function runProgram() {
    const password = prompt('Enter password:');
    let command;

    while ((command = prompt('Enter command (type "Complete" to finish):')) !== 'Complete') {
        processCommand(command, password);
    }
}

runProgram();