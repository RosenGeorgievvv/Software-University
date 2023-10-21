function numbers(str) {
  let nums = str.split(" ").map(Number);
  let sum = nums.reduce((acc, val) => acc + val);
  let avg = sum / nums.length;

  let topFiveNumbers = nums.filter((num) => num > avg).sort((a,b) => b - a).slice(0, 5);

  if(topFiveNumbers.length === 0){
    console.log("No");
  }else{
    console.log(topFiveNumbers.join(' '));
  }

}
numbers("10 20 30 40 50");
