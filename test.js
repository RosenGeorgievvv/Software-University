function comp(arr) {

    let command = arr.pop().toLowerCase();
    let withoutTaxes = 0;
    let withTaxes = 0;
    let totalPrice = 0;

    if(arr.length === 0){
       return console.log("Invalid order!");
    }

    for(let num of arr){
        let currrentPrice = Number(num);
        
        if(currrentPrice < 0){
            console.log("Invalid price!");
            continue;
        }else{
            withoutTaxes += currrentPrice
        }    
    }
    if(withoutTaxes === 0){
        return console.log("Invalid order!");
    }
    withTaxes = withoutTaxes * 0.2;
    totalPrice = withTaxes + withoutTaxes;

    if(command === 'special'){
        totalPrice = totalPrice - (totalPrice * 0.1);
    }
    console.log(`Congratulations you've just bought a new computer!`);
    console.log(`Price without taxes: ${withoutTaxes.toFixed(2)}$`);
    console.log(`Taxes: ${withTaxes.toFixed(2)}$`);
    console.log("-----------");
    console.log(`Total price: ${totalPrice.toFixed(2)}$`);
}
comp(["1050", "200", "450", "2", "18.50", "16.86", "special"]);
