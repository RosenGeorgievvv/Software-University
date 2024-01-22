function solve() {

  let inputArea = document.getElementById('input').value;
  let outputArea = document.getElementById('output');

  let inputSplit = inputArea.split('.').filter((para) => para.length > 0);

  for (let i = 0; i < inputSplit.length; i += 3) {
    let arr = [];

    
    for (let j = 0; j < 3; j++) {
      if (inputSplit[i + j]) {
        arr.push(inputSplit[i + j]);
      }
    }
    let paragraph = arr.join('. ') + '.';
    outputArea.innerHTML += `<p>${paragraph}</p>`;
  }
}