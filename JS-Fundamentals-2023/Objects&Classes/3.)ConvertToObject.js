//Task: Write a function that receives a string in JSON format and converts it to an object.

// Loop through all the keys and print them with their values in format: "{key}: {value}"

//Solution:

function convertToObject(json) {
  let parseToObject = JSON.parse(json);
  let entries = Object.entries(parseToObject);

  for (let [key, value] of entries) {
    console.log(`${key}: ${value}`);
  }
}
convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');
