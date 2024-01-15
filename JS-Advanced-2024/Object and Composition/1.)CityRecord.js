//Task: You will receive a city’s name (string), population (number), and treasury (number) as arguments, which you will need to set as properties of an object and return it.

//Solution:

function records(name, population, treasury) {

    let obj = {};

    obj.name = name;
    obj.population = population;
    obj.treasury = treasury;

    return obj;
}
records('Tortuga',
    7000,
    15000)