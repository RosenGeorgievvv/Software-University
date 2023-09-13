//Task: Write a function that receives a number M and a number N (M will always be bigger than N). Print all numbers from M to N.

//Solution:

function numsFromMToN(num1, num2){

    let startingNum = Number(num1);
    let finalNum = Number(num2);

    while(startingNum >= finalNum){
        console.log(startingNum);
        startingNum--;
    }

}
numsFromMToN("6", "2");