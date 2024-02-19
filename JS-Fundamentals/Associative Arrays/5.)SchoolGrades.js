//Task: Write a function that stores students and their grades throughout the year. If a student appears more than once, add the new grades to existing ones. Finally, print the students and their average grades, sorted alphabetically by student name. The input comes as an array of strings.

// Note: The average grades must be fixed to the second decimal place.

//Solution:

function schoolGrades(arr) {
    let studentGrades = new Map();
  
    for (let entry of arr) {
      let [name, ...grades] = entry.split(' ');
      let studentName = name;
      let studentGradesList = grades.map(grade => parseInt(grade, 10));
  
      if (studentGrades.has(studentName)) {
        studentGrades.set(studentName, [
          ...studentGrades.get(studentName),
          ...studentGradesList
        ]);
      } else {
        studentGrades.set(studentName, studentGradesList);
      }
    }
    let sortedStudentGrades = new Map(
      [...studentGrades].sort(([a], [b]) => a.localeCompare(b))
    );
  
    for (let [name, grades] of sortedStudentGrades) {
      let average = (
        grades.reduce((sum, grade) => sum + grade, 0) / grades.length
      ).toFixed(2);
      console.log(`${name}: ${average}`);
    }
  }
schoolGrades(["Lilly 4 6 6 5", "Tim 5 6", "Tammy 2 4 3", "Tim 6 6"]);
