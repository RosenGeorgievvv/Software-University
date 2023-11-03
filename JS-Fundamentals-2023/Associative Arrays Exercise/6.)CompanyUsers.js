//Task: Write a function, which keeps the information about companies and their employees.

// You will receive an array of strings containing the company name and employee's id. Add each employee to the given company. Keep in mind that a company cannot have two employees with the same id.

// When you finish reading data, order the companies by their name in ascending order.

// Print the company name and each employee's id in the following format:

// {companyName}

// -- {id1}

// -- {id2}

// -- {idN}

// Input / Constraints

// · The input come as array of strings, each in the format: "{companyName} -> {employeeId}".

// · The input always will be valid.

//Solution:

function companyUsers(arr) {
  let companyEmployees = {};

  for (let companyEmployee of arr) {
    let [company, employeeId] = companyEmployee.split(" -> ");

    if (company in companyEmployees) {
      if (!companyEmployees[company].includes(employeeId)) {
        companyEmployees[company].push(employeeId);
      }
    } else {
      companyEmployees[company] = [employeeId];
    }
  }
  let entries = Object.entries(companyEmployees).sort((a, b) => a[0].localeCompare(b[0]));

  for (let [name, employeeIds] of entries) {
    console.log(name);
    employeeIds.forEach((id) => console.log(`-- ${id}`));
  }
}
companyUsers([
  "SoftUni -> AA12345",
  "SoftUni -> BB12345",
  "Microsoft -> CC12345",
  "HP -> BB12345",
]);
