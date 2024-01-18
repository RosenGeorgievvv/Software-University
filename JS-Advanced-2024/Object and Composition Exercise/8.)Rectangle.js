//Task: Write a function that creates and returns a rectangle object. The rectangle needs to have a width (Number), height (Number), and color (String) properties, which are set via arguments during creation, and a calcArea() method, that calculates and returns the rectangle’s area.

// Input

// The function will receive three valid parameters – width (Number), height (Number), and color (String).

// Output

// Your function must return an object with all properties and methods as described. The calcArea() method of the object should return a number. The first letter in the color must be upperCase().


//Solution:

function rectangle(width, height, color) {
    return {
        widthProp: width,
        heightProp: height,
        colorProp: String(color).charAt(0).toUpperCase() + String(color).slice(1),
        calcArea: function () {
            return this.widthProp * this.heightProp
        },
    }
}
let rect = rectangle(4, 5, 'red');

console.log(rect.widthProp);

console.log(rect.heightProp);

console.log(rect.colorProp);

console.log(rect.calcArea());