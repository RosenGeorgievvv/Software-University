//Task: Write a regular expression to match a valid phone number from Sofia. After you find all valid phones, print them on the console, separated by a comma and a space ", ".

//Solution:

function matchPhoneNumber(input) {
  let regexp = /(?<!\d)[+]359([ -])2\1\d{3}\1\d{4}\b/g;
  let validNames = [];

  let validName;
  while ((validName = regexp.exec(input)) !== null) {
    validNames.push(validName[0]);
  }
  console.log(validNames.join(", "));
}
matchPhoneNumber("+359 2 222 2222", "+359-2-222-2222");
