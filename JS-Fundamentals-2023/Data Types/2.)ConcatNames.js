//Task: Write a function, which receives two names as string parameters and a delimiter. Print the names joined by the delimiter.

//Solution:

function concatNames(firstName, lastName, del) {

    console.log(`${firstName}${del}${lastName}`)
}
concatNames(
  "John",
  "Smith",
  "->"
);
