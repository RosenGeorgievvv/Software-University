function messageTranslator(arr) {
    let count = Number(arr.shift());
    
    for (let index = 0; index < count; index++) {
        let pattern = arr.shift();
        let match = pattern.match(/!([A-Z][a-z]{2,})!:\[([A-Za-z]{8,})]/);
        if (match) {
            let [, command, encrypted] = match;
            
            let result = encrypted
                .split('')
                .filter(char => char !== ' ')
                .map(char => char.charCodeAt())
                .join(' ');

            console.log(`${command}: ${result}`);
        } else {
            console.log("The message is invalid");
        }
    }
}
messageTranslator(["2", "!Send!:[IvanisHere]", "*Time@:[Itis5amAlready]"]);
