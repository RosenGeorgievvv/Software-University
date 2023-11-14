//Task: Write a function to calculate the total cost of different types of furniture. You will be given some lines of input until you receive the line "Purchase". For the line to be valid it should be in the following format:

// ">>{furniture name}<<{price}!{quantity}"

// The price can be a floating-point number or a whole number. Furniture items must start with a capital letter. Store the names of the furniture and the total price. At the end print each bought furniture on a separate line in the format:

// "Bought furniture:

// {1st name}

// {2nd name}

// …"

// And on the last line print, the following: "Total money spend: {spend money}" formatted to the second decimal point.

// If there are not valid furniture print only:

// Bought furniture:

// Total money spend: {spend money}

//Solution:

function furniture(input) {
  let regexp = />>(?<name>[A-Za-z]+)<<(?<price>\d+(?:\.\d+)?)!(?<quantity>\d+)/;
  let furnitures = [];
  let totalCount = 0;

  while (input[0] !== "Purchase") {
    let currentRow = input.shift();
    let match = regexp.exec(currentRow);

    if(match !== null){
        let {name, price, quantity} = match.groups;

        price = Number(price);
        quantity = Number(quantity);
        totalCount += price * quantity;
        furnitures.push(name);
    }
  }
  console.log('Bought furniture:');

  furnitures.forEach((item) => console.log(item));
  console.log(`Total money spend: ${totalCount.toFixed(2)}`);
}
furniture([">>Sofa<<312.23!3", ">>TV<<300!5", ">Invalid<<!5", "Purchase"]);
