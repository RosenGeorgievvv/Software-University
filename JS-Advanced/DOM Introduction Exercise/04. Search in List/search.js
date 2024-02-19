function search() {
   towns = Array.from(document.querySelectorAll('ul#towns>li'));
   input = document.querySelector('input#searchText').value;
   result = document.querySelector('div#result');

   let matches = 0;
   towns.forEach(town => {
      let townName = town.textContent;
      if (input && townName.indexOf(input) >= 0) {
         town.innerHTML = `<bold><u>${townName}</u></bold>`;
         matches++;
      }
   });
   result.textContent = `${matches} matches found`;
}
