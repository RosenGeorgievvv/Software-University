//Task: Write a function that calculates how long it takes a student to get to university. The function takes three numbers:
// The first is the number of steps the student takes from their home to the university
// Тhe second number is the length of the student's footprint in meters
// Тhe third number is the student speed in km/h
// Every 500 meters the student rests and takes a 1-minute break.


//Solution:

function walkingTime(steps, footprintLength, speed) {

    let stepsCount = Number(steps);
    let footprintNum = Number(footprintLength);
    let speedCount = Number(speed);

    let convertDistance = stepsCount * footprintNum;
    let speedInSeconds = speedCount / 3.6;
    let time = convertDistance / speedInSeconds;
    let restPeriod = Math.floor(convertDistance / 500);

    let timeInMinutes = Math.floor(time / 60);
    let timeInSeconds = Math.round(time - (timeInMinutes * 60));
    let timeInHours = Math.floor(time / 3600);

    console.log((timeInHours < 10 ? "0" : "") + timeInHours + ":" + (timeInMinutes + restPeriod < 10 ? "0" : "") + (timeInMinutes + restPeriod) + ":" + (timeInSeconds < 10 ? "0" : "") + timeInSeconds);

}
walkingTime(4000, 0.60, 5)