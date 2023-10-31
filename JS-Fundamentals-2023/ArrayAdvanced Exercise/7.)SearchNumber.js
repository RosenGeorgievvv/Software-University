//Task: You will receive two arrays of integers. The second array is containing exactly three numbers.

// The first number represents the number of elements you have to take from the first array (starting from the first one).

// The second number represents the number of elements you have to delete from the numbers you took (starting from the first one).

// The third number is the number we search in our collection after the manipulations.

// As output print how many times that number occurs in our array in the following format:

// "Number {number} occurs {count} times."

//Solution:

function searchNum(arr, count) {
  let [save, del, search] = count;
  let newElement = arr.slice(0, save);
  newElement.splice(0, del);
  let result = newElement.filter((num) => num === search).length;
  console.log(`Number ${search} occurs ${result} times.`);
}
searchNum([5, 2, 3, 4, 1, 6], [5, 2, 3]);
