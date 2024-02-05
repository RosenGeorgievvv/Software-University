//Task: Write a JS class that represents a Point. It has x and y coordinates as properties, that are set through the constructor, and a static method for finding the distance between two points, called distance().


//Solution:

class Point{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
    static distance(a1, a2){
        const ax = a1.x - a2.x;
        const ay = a1.y - a2.y;
        return Math.sqrt(ax ** 2 + ay ** 2);
    }
}

let a1 = new Point(5, 5);
let a2 = new Point(9, 8);

console.log(Point.distance(a1, a2));