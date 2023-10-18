function numbers(str) {
  let nums = str.split(" ").map(Number);
  let avg = nums.reduce((acc, val) => acc + val) / nums.length;
  let topFive = nums
    .filter((num) => num > avg)
    .sort((a, b) => b - a)
    .slice(0, 5);

  if (topFive.length == 0) {
    console.log("No");
  }else{
    console.log(topFive.join(' '));
  }
}
numbers("10 20 30 40 50");
