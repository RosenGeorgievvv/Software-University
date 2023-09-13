//Task: Write a function that receives a number N and prints all the numbers from N to 1. Try using the while loop.

//Solution:

function whileLoop(n){

let num = Number(n);

while(num >= 1){
    console.log(num);
    num--;
}

}
whileLoop("5");