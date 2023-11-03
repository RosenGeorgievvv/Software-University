//Task: There is a party at SoftUni. Many guests are invited and they are two types: VIP and regular. When guests come to the party check if he/she contains in any of the two reservation lists.

// The input will come as an array of strings. You will be given the list with the guests before you receive a command "PARTY".

// All VIP numbers start with a digit.

// When you receive the command "PARTY", the guests start coming.

// Print the count of guests then all guests, who didn't come to the party (VIP must be printed first).

// Hint: Guest names are not unique. Only the first match is removed when receiving a name.

//Solution:

function partyGuests(input) {
    
  function isVIP(name) {
    return !isNaN(name[0]);
  }

  let guests = {
    VIP: new Set(),
    regular: new Set(),
  };

  let isPartyStarted = false;

  for (let name of input) {
    if (name === "PARTY") {
      isPartyStarted = true;
      continue;
    }

    if (!isPartyStarted) {
      if (isVIP(name)) {
        guests.VIP.add(name);
      } else {
        guests.regular.add(name);
      }
    } else {
      if (isVIP(name)) {
        guests.VIP.delete(name);
      } else {
        guests.regular.delete(name);
      }
    }
  }

  let allGuests = new Set([...guests.VIP, ...guests.regular]);

  console.log(allGuests.size);
  for (let guest of guests.VIP) {
    console.log(guest);
  }
  for (let guest of guests.regular) {
    console.log(guest);
  }
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
