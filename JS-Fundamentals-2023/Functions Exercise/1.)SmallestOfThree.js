//Task: Write a function that receives three integers and prints the smallest number. Use an appropriate name for the function.

//Solution:

function smallestNum(num1,num2,num3){

    let smallest = Math.min(num1,num2,num3);
    console.log(smallest);
}
smallestNum(2,5,3)