//Task: Write a JS function that calculates the date of the previous day by given year, month, and day.
// The input comes as three numeric parameters. The first element is the year, the second is the month and the third is the day.
// The output must be the return date of the previous day in the format: `{year}-{month}-{day}`

//Solution:

function calculateTheDate(y, m, d){

  let previous = new Date(y, m - 1, d - 1);
  let year = previous.getFullYear();
  let month = previous.getMonth() + 1;
  let newDate = previous.getDate();
  console.log(`${year}-${month}-${newDate}`)
}
calculateTheDate(2016, 9, 30)