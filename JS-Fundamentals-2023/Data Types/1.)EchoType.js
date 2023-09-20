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
