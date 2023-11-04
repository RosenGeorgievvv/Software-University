//Task: There is a party at SoftUni. Many guests are invited and they are two types: VIP and regular. When guests come to the party check if he/she contains in any of the two reservation lists.

// The input will come as an array of strings. You will be given the list with the guests before you receive a command "PARTY".

// All VIP numbers start with a digit.

// When you receive the command "PARTY", the guests start coming.

// Print the count of guests then all guests, who didn't come to the party (VIP must be printed first).

// Hint: Guest names are not unique. Only the first match is removed when receiving a name.

//Solution:

function partyGuests(input) {
  let invitedList = input.splice(0, input.indexOf("PARTY"));
  input.splice(0, 1);
  let VIP = [];
  let regular = [];
  for (let guest of invitedList) {
    if (guest[0] >= "0" && guest[0] <= "9") {
      VIP.push(guest);
    } else {
      regular.push(guest);
    }
  }
  for (let guest of input) {
    if (VIP.includes(guest)) {
      VIP.splice(VIP.indexOf(guest), 1);
    }
    if (regular.includes(guest)) {
      regular.splice(regular.indexOf(guest), 1);
    }
  }
  console.log(VIP.length + regular.length);
  VIP.forEach((x) => console.log(x));
  regular.forEach((x) => console.log(x));
}
partyGuests([
  "7IK9Yo0h",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
  "tSzE5t0p",
  "PARTY",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
]);
