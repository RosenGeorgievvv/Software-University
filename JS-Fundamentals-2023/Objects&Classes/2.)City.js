//Task: Write a function that receives a single parameter – an object, containing five properties:

// { name, area, population, country, postcode }

// Loop through all the keys and print them with their values in format: "{key} -> {value}"

//Solution:

function cityInfo(city) {
  let entries = Object.entries(city);
  for (let [key, value] of entries) {
    console.log(`${key} -> ${value}`);
  }
  
}
cityInfo({
  name: "Plovdiv",

  area: 389,

  population: 1162358,

  country: "Bulgaria",

  postCode: "4000",
});
