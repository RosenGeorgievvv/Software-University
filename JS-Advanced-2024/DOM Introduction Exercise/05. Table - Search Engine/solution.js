function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let srchField = document.getElementById('searchField');
      let rows = Array.from(document.querySelectorAll('.container tbody tr'));
      let searchText = srchField.value;
      rows.forEach(row => {
          row.className = '';
      });

      let filteredRows = rows.filter(row => {
          let values = Array.from(row.children);

          if (values.some(td => td.textContent.includes(searchText))) {
              row.className = 'select';
          }
      });
      srchField.value = '';
  }
}