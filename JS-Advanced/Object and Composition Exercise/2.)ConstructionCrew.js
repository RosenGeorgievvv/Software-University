//Task: Write a program that receives a worker object as a parameter and modifies its properties. Workers have the following structure:

// {

//     weight: Number,
    
//     experience: Number,
    
//     levelOfHydrated: Number,
    
//     dizziness: Boolean
    
//     }
    
//     Weight is expressed in kilograms, experience in years and levelOfHydrated is in milliliters. If you receive a worker whose dizziness property is set to true it means he needs to intake some water to be able to work correctly. The required amount is 0.1ml per kilogram per year of experience. The required amount must be added to the existing amount (to the levelOfHydrated). Once the water is administered, change the dizziness property to false.
    
//     Workers who do not have dizziness should not be modified in any way. Return them as they were.
    
//     Input
    
//     Your function will receive a valid object as a parameter.
    
//     Output
    
//     Return the same object that was passed in, modified as necessary

//Solution:


function workers(worker) {
    if (worker.dizziness) {
        const requiredWater = 0.1 * worker.weight * worker.experience;
        worker.levelOfHydrated += requiredWater;
        worker.dizziness = false;
    }
    return worker;
}