const express = require('express');

const app = express();

app.get('/', (request, response) =>{
    response.send("Hello, Express!")
}); 
app.listen(3000, () =>{
    console.log('Listen on port 3000');
});