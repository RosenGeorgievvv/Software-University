//Task: Write a program, which matches a date in the format "dd{separator}MMM{separator}yyyy".

//Solution:

function matchDates(input) {
  let regExp =
    /(?<day>\d{2})([\.\-\/])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})/g;

  let match;

  while ((match = regExp.exec(input)) !== null) {
    let day = match.groups.day;
    let month = match.groups.month;
    let year = match.groups.year;

    console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
  }
}
matchDates("13/Jul/1928", "10-Nov-1934", "25.Dec.1937");
