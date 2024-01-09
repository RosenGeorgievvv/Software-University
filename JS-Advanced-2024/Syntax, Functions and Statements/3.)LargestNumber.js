//Task: Write a function that takes three number arguments as input and finds the largest of them. Print the following text on the console: `The largest number is {number}.`.

//Solution:

function largestNum(firstNum, secondNum, thirdNum) {
  //shortest way:
  console.log(
    `The largest number is ${Math.max(firstNum, secondNum, thirdNum)}.`
  );

  
  //second way:
  let result = Math.max(firstNum, secondNum, thirdNum);
  console.log(`The largest number is ${result}.`);

  //third way:
  

  let final ;

  if(firstNum > secondNum && firstNum > thirdNum){
    final = firstNum
  }else if(secondNum > firstNum && secondNum > thirdNum){
    final = secondNum;
  }else if(thirdNum > firstNum && thirdNum > secondNum){
    final = thirdNum;
  }
  console.log(`The largest number is ${final}.`);
}
largestNum(5, -3, 16);
