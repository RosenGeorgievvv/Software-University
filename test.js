function phoneShop(arr) {
  let phoneList = arr.shift().split(", ");

  for (let line of arr) {
    if (line === "End") {
      break;
    }

    let [command, value] = line.split(" - ");

    if (command === "Add") {
      let phone = value;
 
      if (!phoneList.includes(phone)) {
        phoneList.push(phone);
      }
    } else if (command === "Remove") {
      let phone = value;
      let existance = phoneList.indexOf(phone);
      if (existance !== -1) {
        phoneList.splice(existance, 1);
      }
    } else if (command === "Bonus phone") {
      let [oldPhone, newPhone] = value.split(":");
      let exinstance = phoneList.indexOf(oldPhone);
      if (exinstance !== -1) {
        phoneList.splice(exinstance + 1, 0, newPhone);
      }
    } else if (command === "Last") {
      let phone = value;
      let exinstance = phoneList.indexOf(phone);
      if (exinstance !== -1) {
        phoneList.splice(exinstance, 1);
        phoneList.push(phone);
      }
    }
  }
  console.log(phoneList.join(", "));
}
phoneShop([
  "SamsungA50, MotorolaG5, IphoneSE",

  "Add - Iphone10",

  "Remove - IphoneSE",

  "End",
]);
