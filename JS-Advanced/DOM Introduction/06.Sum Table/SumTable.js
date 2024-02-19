function sumTable() {
let table = document.querySelectorAll('table tr');
let wholeBill = 0;

for(let i = 1; i < table.length; i++){
    let columns = table[i].children;
    let price = columns[columns.length - 1].textContent;
    wholeBill += Number(price);
}
document.getElementById('sum').textContent = wholeBill;

}