function solve(arr) {
 
    let guestList = [];

    for(let i = 0; i < arr.length; i++){
        let currentRow = arr[i].split(' ');
        let currentName = currentRow[0];
        let command = currentRow[2];

        if(command != "not"){
            if(guestList.includes(currentName) === true){
                console.log(`${currentName} is already in the list!`);
                continue;
            }
            guestList.push(currentName);
        }else{
            if(guestList.includes(currentName) === false){
                console.log(`${currentName} is not in the list!`);
                continue;
            }
            guestList = guestList.filter(x => x != currentName)
        }
    }
console.log(guestList.join('\n'));
}

solve(['Allie is going!',

'George is going!',

'John is not going!',

'George is not going!']);
