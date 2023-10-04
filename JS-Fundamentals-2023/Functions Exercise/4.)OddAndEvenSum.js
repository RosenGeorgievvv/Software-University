//Task: You will receive a single number. You have to write a function, that returns the sum of all even and all odd digits from that number.

//Solution:

function oddAndEvenSum(num) {
  let odd = 0;
  let even = 0;

  let numToStr = num.toString();

  for (let i = 0; i < numToStr.length; i++) {
    let digit = parseInt(numToStr[i])
    if (digit % 2 === 0) {
      even += digit;
    } else {
      odd += digit;
    }
  }
  console.log(`Odd sum = ${odd}, Even sum = ${even}`);
}
oddAndEvenSum(1000435);
