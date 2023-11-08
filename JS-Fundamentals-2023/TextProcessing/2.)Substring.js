//Task: Write a function that receives a string and two numbers. The numbers will be a starting index and count of elements to substring. Print the result.

//Solution:

function substring(str, start, count) {
 console.log(str.substring(start, start + count));
}
substring("ASentence", 1, 8);
