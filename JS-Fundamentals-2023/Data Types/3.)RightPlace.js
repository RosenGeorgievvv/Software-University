//Task: You will receive 3 parameters (string, char, string). The first string will be a word with a missing char replaced with an underscore '_'. You have to replace the missing character (underscore) of the first string with the character passed as the second parameter and compare the result with the second string.

// If they are equals, you should print "Matched", otherwise print "Not Matched".

//Solution:

function rightPlace(str, char, result) {
  let res = str.replace("_", char);
  let final = res === result ? "Matched" : "Not Matched";
  console.log(final);
}
rightPlace("Str_ng", "I", "Strong");
