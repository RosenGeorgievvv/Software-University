//Task: Write a program that filters the employees of your company. You should print the result in a specific format. You will receive 2 parameters (data, criteria). You should parse the input, find all employees that fulfill the criteria, and print them.

//Solution:
function solve(input, criteria){
    let counter = 0;

    let employees = JSON.parse(input);
    if(criteria !== 'all'){
        let [name, value] = criteria.split('-');
        employees = employees.filter(i => i[name] === value);
    }
    console.log(employees.map(i => `${counter++}. ${i.first_name} ${i.last_name} - ${i.email}`).join('\n'));
}


solve(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`,
    'gender-Female'
);