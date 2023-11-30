//Task: The input will be a single string.

// Write a function that cuts the given string into half and reverse the two halves.

// Print each half on a separate line.

//Solution:

function boringTask(str) {
  const firstLine = str
    .substring(0, str.length / 2)
    .split("")
    .reverse()
    .join("");
  const secondLine = str
    .substring(str.length / 2)
    .split("")
    .reverse()
    .join("");

  console.log(firstLine);
  console.log(secondLine);
}
boringTask("tluciffiDsIsihTgnizamAoSsIsihT");
