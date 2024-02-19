function solve() {
  const input = document.getElementById("text").value;
  const transform = document.getElementById("naming-convention").value;
  const result = document.getElementById("result");

  const splitter = input.split(" ");

  let resultStr = "";

  if (transform == "Pascal Case") {
    for (let i = 0; i < splitter.length; i++) {
      resultStr += splitter[i][0].toUpperCase() +
        splitter[i].slice(1, splitter[i].length).toLowerCase();
    }
  
    result.textContent = resultStr;
  } else if (transform == "Camel Case") {
    resultStr += splitter[0][0].toLowerCase()
      + splitter[0].slice(1, splitter[0].length).toLowerCase();
    for (let i = 1; i < splitter.length; i++) {
      resultStr += splitter[i][0].toUpperCase() +
        splitter[i].slice(1, splitter[i].length).toLowerCase();
    }

    result.textContent = resultStr;
  } else {
    
    result.textContent = "Error!";
  }
}

