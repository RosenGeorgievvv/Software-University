//Task:Write a JS function that takes one parameter and prints on two lines the type of the parameter and then one of the following:

// · If the parameter type is either string or number, print its value

// · Otherwise, print the text 'Parameter is not suitable for printing'


//Solution:

function echo(input) {

    let param = typeof input;
    console.log(param);

    if(param === "string" || param === "number"){
        console.log(input)
    }else{
        console.log("Parameter is not suitable for printing")
    }
}
echo("Hello, JavaScript!");
