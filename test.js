function comp(arr) {

    let command = arr.pop().toLowerCase();
    let withoutTaxes = 0;
    let withTaxes = 0;
    let totalPrice = 0;

    if(arr.length === 0){
       return console.log("Invalid order!");
    }


