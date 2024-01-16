//Task: You’re tasked with creating an HTML table of students and their scores. You will receive a single string representing an array of objects, the table’s headings should be equal to the object’s keys, while each object’s values should be a new entry in the table. Any text values in an object should be escaped, to avoid introducing dangerous code into the HTML.

// Input

// The input comes with a single string argument (the array of objects).

// Output

// The output should be printed on the console – for each entry row in the input print the object representing it.

// Note: Objects’ keys will always be the same. Check more information for the HTML Entity here.

// HTML

// You are provided with an HTML file to test your table in the browser.


//Solution:

function table(input) {
    let students = JSON.parse(input);
    let htmlText = ['<table>'];
    let objNames = students[0];
    htmlText.push(makeKeyRow(objNames));
    students.forEach(obj => htmlText.push(makeValueRow(obj)));
    htmlText.push('</table>');
    function makeKeyRow(arr) {
        let keys = [];
        Object.keys(arr).forEach(key => {
            keys.push(`<th>${escapeHTML(key)}</th>`);
        });
        return ("<tr>" + keys.join('') + "</tr>");
    }
    function makeValueRow(obj) {
        let rows = [];
        Object.values(obj).forEach(value => {
            rows.push(`<td>${escapeHTML(value)}</td>`);
        });
        return ("<tr>" + rows.join('') + "</tr>");
    }
    function escapeHTML(value) {
        return value
            .toString()
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }
    return htmlText.join('\r\n');
}