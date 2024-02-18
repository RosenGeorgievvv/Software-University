const expect = require('chai');
const findNewApartment = require('./findApartment');

describe("Tests for findNewApartment object", function() {
    describe("isGoodLocation function", function() {
        it("Should return 'You can go on home tour!' for a good location with public transportation", function() {
            expect(findNewApartment.isGoodLocation("Sofia", true)).to.equal("You can go on home tour!");
        });


        it("Should return 'There is no public transport in area.' for a good location without public transportation", function() {
            expect(findNewApartment.isGoodLocation("Plovdiv", false)).to.equal("There is no public transport in area.");
        });

        it("Should return 'This location is not suitable for you.' for a bad location", function() {
            expect(findNewApartment.isGoodLocation("Paris", true)).to.equal("This location is not suitable for you.");
        });

        it("Should throw an error for invalid input", function() {
            expect(() => { findNewApartment.isGoodLocation("Sofia", "true") }).to.throw(Error, "Invalid input!");
        });
    });



    describe("isLargeEnough function", function() {
        it("Should return array of apartments with areas equal or bigger than minimalSquareMeters", function() {
            expect(findNewApartment.isLargeEnough([50, 60, 70], 60)).to.deep.equal([60, 70]);
        });

        it("Should return empty array if no apartment is large enough", function() {
            expect(findNewApartment.isLargeEnough([40, 45], 50)).to.have.lengthOf(0);
        });

        it("Should throw an error for invalid input", function() {
            expect(() => { findNewApartment.isLargeEnough("not an array", 50) }).to.throw(Error, "Invalid input!");
            expect(() => { findNewApartment.isLargeEnough([], 50) }).to.throw(Error, "Invalid input!");
            expect(() => { findNewApartment.isLargeEnough([40, 45], "not a number") }).to.throw(Error, "Invalid input!");
        });
    });

    describe("isItAffordable function", function() {
        it("Should return 'You can afford this home!' if the price is within the budget", function() {
            expect(findNewApartment.isItAffordable(50000, 100000)).to.equal("You can afford this home!");
        });

        it("Should return 'You don't have enough money for this house!' if the price exceeds the budget", function() {
            expect(findNewApartment.isItAffordable(150000, 100000)).to.equal("You don't have enough money for this house!");
        });

        it("Should throw an error for invalid input", function() {
            expect(() => { findNewApartment.isItAffordable("not a number", 100000) }).to.throw(Error, "Invalid input!");
            expect(() => { findNewApartment.isItAffordable(50000, "not a number") }).to.throw(Error, "Invalid input!");
            expect(() => { findNewApartment.isItAffordable(-50000, 100000) }).to.throw(Error, "Invalid input!");
            expect(() => { findNewApartment.isItAffordable(50000, -100000) }).to.throw(Error, "Invalid input!");
        });
    });
});
