//Task: You’re tasked with creating an HTML table of students and their scores. You will receive a single string representing an array of objects, the table’s headings should be equal to the object’s keys, while each object’s values should be a new entry in the table. Any text values in an object should be escaped, to avoid introducing dangerous code into the HTML.

// Input

// The input comes with a single string argument (the array of objects).

// Output

// The output should be printed on the console – for each entry row in the input print the object representing it.

// Note: Objects’ keys will always be the same. Check more information for the HTML Entity here.

// HTML

// You are provided with an HTML file to test your table in the browser.


//Solution:

function fromJSONToHTMLTable(input){
        
    let arr = JSON.parse(input);
    let outputArr = ["<table>"];
    console.log("<table>")
    header=Object.keys(arr[0])
    //console.log(header)
    outputArr.push(makeKeyRow(header));
    arr.forEach((obj) => outputArr.push(makeValueRow(obj)));
    outputArr.push("</table>");
    console.log("</table>")
    function makeKeyRow(header) { 
        let rowStr="   <tr>"
        for (let i=0;i<header.length;i++){
            rowStr+="<th>"
            rowStr+=header[i]
            rowStr+="</th>"
        }
        rowStr+="</tr>"
        outputArr.push(rowStr)
        console.log(rowStr)
 
    }
    
    function makeValueRow(obj) {
        let rowStr="   <tr>"
        for (let i=0;i<header.length;i++){
            rowStr+="<td>"
            rowStr+=escapeHtml(obj[header[i]])
            rowStr+="</td>"
        }
        rowStr+="</tr>"
        outputArr.push(rowStr)
        console.log(rowStr)
    };
    
    function escapeHtml(value) {        
         let entityMap = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            ' ': '&nbsp;',
        };
        return value.toString().replace(/[&<> "]/g, (value) => entityMap[value]);};
}