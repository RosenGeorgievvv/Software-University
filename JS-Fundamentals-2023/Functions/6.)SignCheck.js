//Task: Write a function, that checks whether the result of the multiplication numOne * numTwo * numThree is positive or negative. Try to do this WITHOUT multiplying the 3 numbers.

// Input

// The input comes as parameters named numOne, numTwo, numThree.

// Output

// · If the result is positive, print on the console -> "Positive"

// · Otherwise, print -> "Negative"

//Solution:

function signCheck(num1, num2, num3) {

    let negativeCount = [num1, num2, num3].reduce((count, num) =>{
        if(num < 0){
            return count + 1;
        }
        return count;
    }, 0);

    if(negativeCount % 2 !== 0){
        console.log("Negative");
    }else{
        console.log("Positive")
    }
}
signCheck(5,12,-15);
