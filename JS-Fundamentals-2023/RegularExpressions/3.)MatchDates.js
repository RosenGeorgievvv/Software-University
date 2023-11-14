//Task: Write a program, which matches a date in the format "dd{separator}MMM{separator}yyyy".

//Solution:

function matchDates(input){

    let regExp = /(?<day>\d{2})([\.\-\/])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})/g

}
matchDates()