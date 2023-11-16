function solve(text) {
    let regEx = /\b[A-Z][a-z]+[ ][A-Z][a-z]+\b/g
    let matches = text.match(regEx);

  if(matches){
    console.log(matches.join(' '));
  }

  console.log(matches);
}
solve("Ivan Ivanov");
