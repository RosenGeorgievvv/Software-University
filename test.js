function modernTimes(str) {
  let splittedString = str.split(" ");

  let result = splittedString.filter((word) => word.includes("#") && word.length > 1);
 
console.log(result);
 
}
modernTimes("Nowadays everyone uses # to tag a #special word in #socialMedia");
