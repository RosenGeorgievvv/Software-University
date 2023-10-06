//Task: A palindrome is a number, which reads the same backward as forward, such as 323 or 1001. Write a function, which receives an array of positive integers and checks if each integer is a palindrome or not.

//Solution:

function pali(arr) {

    

  function checkPalindrome(num) {
    let numAsString = String(num);
    let reversedNumStr = "";

    for(let i = numAsString.length - 1; i >= 0; i--){
        let curChar = numAsString[i];
        reversedNumStr += curChar;
    }
    let isPalindrome = numAsString == reversedNumStr;
    return isPalindrome;
  }
}
pali([123, 323, 421, 121]);
