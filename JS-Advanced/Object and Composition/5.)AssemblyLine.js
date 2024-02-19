//Task: Create a function that can compose objects by copying functions from a given library of functions. You will receive two parameters – a library of functions as an associative array (object) and an array of orders, represented as objects. You must return a new array – the fulfilled orders.

// The first parameter will be an object where each property is a function. You will use this library of functions to compose new objects.

// The second parameter is an array of orders. Each order is an object with the following shape:

// {

// template: [Object],

// parts: string[]

// }

// A template is an object that must be copied. The parts array contains the names of required functions as strings.

// You must create and return a new array, by fulfilling all orders from the orders array. To fulfill an order, create a copy of the object’s template and then add to it all functions, listed in the parts array of the order, by taking them from the function library (the first parameter to your solution).

// Input

// You will receive two parameters:

// · library – an object

// · orders – an array of objects

// Output

// Your solution must return an array of objects.


//Solution:

function assembly() {

    return {
        hasClima: (car) => {
            car.temp = 21;
            car.tempSettings = 21;
            car.adjustTemp = () => {
                if (car.temp < car.tempSettings) {
                    car.temp++;
                } else if (car.temp > car.tempSettings) {
                    car.temp--;
                }

            };
        },
        hasAudio: (car) => {
            car.currentTrack = { 'name': '', 'artist': '' };
            car.nowPlaying = () => {
                if (car.currentTrack !== null) {
                    console.log(`Now playing '${car.currentTrack.name}' by ${car.currentTrack.artist}`);
                }
            };
        },
        hasParktronic: (car) => {
            car.checkDistance = (distance) => {
                if (distance < 0.1) {
                    console.log('Beep! Beep! Beep!');
                } else if (distance >= 0.1 && distance < 0.25) {
                    console.log('Beep! Beep!');
                } else if (distance >= 0.25 && distance < 0.5) {
                    console.log('Beep!');
                } else {
                    console.log('');
                }
            };
        }
    };
}