//Task: You will be given 3 parameters – student name (string), age (number), and average grade (number).
//Your task is to print all the info about the student in the following format:

// `Name: {student name}, Age: {student age}, Grade: {student grade}`

// Note: The grade should be formatted to the second decimal point.

//Solution:

function studentsInfo(name, age, grade) {

    let nameToStr = name;
    let ageNum = Number(age);
    let gradeNum = Number(grade);
  console.log(`Name: ${nameToStr}, Age: ${ageNum}, Grade: ${gradeNum.toFixed(2)}`);
}
studentsInfo("John", "15", "5.54678");
