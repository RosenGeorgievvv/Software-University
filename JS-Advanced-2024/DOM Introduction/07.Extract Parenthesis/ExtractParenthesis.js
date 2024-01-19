function extract(content) {

    let paragraph = document.getElementById(content).textContent;
    let pattern = /\(([^)]+)\)/g;
    let result = [];

    let match = pattern.exec(paragraph);
    while(match){
        result.push(match[1]);
        match = pattern.exec(paragraph)
    }
    
    return result.join("; ")
}