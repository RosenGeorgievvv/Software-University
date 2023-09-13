// A theatre is doing a ticket sale, but they need a program to calculate the price of a single ticket. If the given age does not fit one of the categories, you should print "Error!". You can see the prices in the table below:

// Day / Age 0 <= age <= 18 18 < age <= 64 64 < age <= 122

// Weekday 12$ 18$ 12$

// Weekend 15$ 20$ 15$

// Holiday 5$ 12$ 10$

// Input

// The input comes in two parameters. The first one will be the type of day (string). The second – the age of the person (number).

// Output

// Print the price of the ticket according to the table, or "Error!" if the age is not in the table.

// Constraints

// · The age will be in the interval [-1000…1000].

// · The type of day will always be valid.

//Solution:

function theatrePromotions(arg1, arg2) {
  let dayType = arg1;
  let age = Number(arg2);
  let price = 0;

  if (age >= 0 && age <= 18) {
    switch (dayType) {
      case "Weekday":
        price = 12;
        console.log(`${price}$`);
        break;
      case "Weekend":
        price = 15;
        console.log(`${price}$`);
        break;
      case "Holiday":
        price = 5;
        console.log(`${price}$`);
        break;
      default:
        break;
    }
  } else if (age > 18 && age <= 64) {
    switch (dayType) {
      case "Weekday":
        price = 18;
        console.log(`${price}$`);
        break;
      case "Weekend":
        price = 20;
        console.log(`${price}$`);
        break;
      case "Holiday":
        price = 12;
        console.log(`${price}$`);
        break;
      default:
        break;
    }
  } else if (age > 64 && age <= 122) {
    switch (dayType) {
      case "Weekday":
        price = 12;
        console.log(`${price}$`);
        break;
      case "Weekend":
        price = 15;
        console.log(`${price}$`);
        break;
      case "Holiday":
        price = 10;
        console.log(`${price}$`);
        break;
      default:
        break;
    }
  } else{
    console.log("Error!")
  }
}
theatrePromotions("Weekday", "42");
