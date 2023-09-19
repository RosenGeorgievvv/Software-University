function login(input){

    let username = input[0];
    let password = '';

    for(let i = username.length - 1; i >= 0; i--){
        password += username[i];
    }

    let attempt = input[1];
    let index = 2;
    let wrongAttempts = 0;

    while(attempt != password){
        wrongAttempts++;

        if(wrongAttempts == 4){
            console.log(`User ${username} blocked!`);
            return;
        }
        console.log("Incorrect password. Try again.");
        attempt = input[index];
        index++;
    }
console.log(`User ${username} logged in.`);
}
login(['Acer','login','go','let me in','recA'])