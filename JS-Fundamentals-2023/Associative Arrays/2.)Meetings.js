//Task: Write a function that manages meeting appointments. The input comes as an array of strings. Each string contains a weekday and person’s name. For each successful meeting, print a message. If you receive the same weekday twice, the meeting cannot be scheduled so print a conflicting message. In the end, print a list of all successful meetings.

//Solution:

function meetings(arr) {
  let calendar = {};

  for (let item of arr) {
    let [day, name] = item.split(" ");

    if (calendar.hasOwnProperty(day)) {
      console.log(`Conflict on ${day}!`);
      continue;
    }
    calendar[day] = name;
    console.log(`Scheduled for ${day}`);
  }
  for(let person in calendar){
    console.log(`${person} -> ${calendar[person]}`);
  }
}
meetings(["Monday Peter", "Wednesday Bill", "Monday Tim", "Friday Tim"]);
