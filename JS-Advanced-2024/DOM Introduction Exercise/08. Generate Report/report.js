function generateReport() {
    let inputElements = Array.from(document.querySelectorAll('input'));
    let resultArr = [];
    let tableRows = Array.from(document.querySelectorAll('tr'));
    let checkedCols = [];

    tableRows.forEach((row, i) => {
        let obj = {};

        if (row.children && row.children.length > 0) {
            Array.from(row.children).forEach((element, y) => {
                if (i === 0) {
                    if (element.children[0] && element.children[0].checked) {
                        checkedCols.push(y);
                    }
                    return;
                }

                if (checkedCols.includes(y)) {
                    let propertyName = inputElements[y].name;
                    obj[propertyName] = element.textContent;
                }
            });
        }
        if (i !== 0) {
            resultArr.push(obj);
        }
    });
    document.getElementById('output').value = JSON.stringify(resultArr);
}
