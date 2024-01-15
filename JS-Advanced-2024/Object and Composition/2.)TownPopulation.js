//Task: You have been tasked to create a registry for different towns and their population.

// Input

// The input comes as array of strings. Each element will contain data for a town and its population in the following format: "{townName} <-> {townPopulation}"

// If you receive the same town twice, you should add the given population to the current one.

// Output

// As output, you must print all the towns and their population.


//Solution:

function townDetails(arr){

    const towns = {};

    for(let toStr of arr){
        let [name, population] = toStr.split(" <-> ");
        population = Number(population);

        if(towns[name] != undefined){
            population += towns[name];
        }
        towns[name] = population;
    }
    for(let town in towns){
console.log(`${town} : ${towns[town]}`);
}
}
townDetails(['Sofia <-> 1200000',

'Montana <-> 20000',

'New York <-> 10000000',

'Washington <-> 2345000',

'Las Vegas <-> 1000000'])