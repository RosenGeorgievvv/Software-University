function solve(input) {

let noTaxes = 0;
let withTaxes = 0;
let totalPrice = 0;

let command = input.pop().toLowerCase();

for(let price of input){
    let currentPrice = Number(price);

    if(price > 0){
        noTaxes += currentPrice;
    }else{
        console.log("Invalid price!");
        continue;
    }
}
if(input.length === 0){
   return console.log("Invalid order!");
}
if(noTaxes === 0) {
    return console.log("Invalid order!");
}
withTaxes = noTaxes * 0.2;
totalPrice = withTaxes + noTaxes;

if(command === 'special'){
    totalPrice = totalPrice - (totalPrice * 0.1);
}
console.log(`Congratulations you've just bought a new computer!`);
    console.log(`Price without taxes: ${noTaxes.toFixed(2)}$`);
    console.log(`Taxes: ${withTaxes.toFixed(2)}$`);
    console.log("-----------");
    console.log(`Total price: ${totalPrice.toFixed(2)}$`);
}
solve(["1050", "200", "450", "2", "18.50", "16.86", "special"]);
