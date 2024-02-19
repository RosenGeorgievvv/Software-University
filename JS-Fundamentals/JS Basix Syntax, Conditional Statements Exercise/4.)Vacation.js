//Task: You are given a group of people, the type of the group, and the day of the week they are going to stay. Based on that information calculate how much they have to pay and print that price on the console. Use the table below. In each cell is the price for a single person.

// The output should look like that: `Total price: {price}`.The price should be formatted to the second decimal point.

//Solution:

function vacation(people, type, day) {
  let price = 0;

  switch (day) {
    case "Friday":
      switch (type) {
        case "Students":
          price = 8.45;
          break;
        case "Business":
          price = 10.9;
          break;
        case "Regular":
          price = 15.0;
          break;
      }
      break;
    case "Saturday":
      switch (type) {
        case "Students":
          price = 9.8;
          break;
        case "Business":
          price = 15.6;
          break;
        case "Regular":
          price = 20.0;
          break;
      }
      break;
    case "Sunday":
      switch (type) {
        case "Students":
          price = 10.46;
          break;
        case "Business":
          price = 16;
          break;
        case "Regular":
          price = 22.5;
          break;
      }
      break;
  }

  let totalPrice = people * price;

  if (type === "Students" && people >= 30) {
    totalPrice = totalPrice * 0.85;
  } else if (type === "Business" && people >= 100) {
    totalPrice = totalPrice - 10 * price;
  } else if (type === "Regular" && people >= 10 && people <= 20) {
    totalPrice = totalPrice * 0.95;
  }

  console.log(`Total price: ${totalPrice.toFixed(2)}`);
}
vacation(30, "Students", "Sunday");
