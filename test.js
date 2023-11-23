function adAstra(str) {
  let textString = str[0];
  let calsPerDay = 2000;

  let pattern = /(\||#)([A-Za-z ]+)\1(\d{2}\/\d{2}\/\d{2})\1(\d+)\1/g;

  let possibleMatch;
  let allFood = [];

  while ((possibleMatch = pattern.exec(textString))) {
    allFood.push(possibleMatch);
  }

  let allCalories = 0;

  for (let food of allFood) {
    let currentCalories = Number(food[4]);
    allCalories += currentCalories;
  }
  let foodForAllDays = allCalories / calsPerDay;
  console.log(
    `You have food to last you for: ${Math.floor(foodForAllDays)} days!`
  );
}

adAstra([
  "#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|",
]);
