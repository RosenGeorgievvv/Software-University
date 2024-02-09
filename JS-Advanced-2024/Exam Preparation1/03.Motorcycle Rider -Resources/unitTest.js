const { expect } = require("chai");
const { MotorcycleRider } = require("./Motorcycle Rider");

describe("Tests for MotorcycleRider object", function() {
    describe("licenseRestriction", function() {
        it("should return correct information for category 'AM'", function() {
            const result = MotorcycleRider.licenseRestriction("AM");
            expect(result).to.equal("Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16.");
        });

        it("should return correct information for category 'A1'", function() {
            const result = MotorcycleRider.licenseRestriction("A1");
            expect(result).to.equal("Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16.");
        });

        it("should return correct information for category 'A2'", function() {
            const result = MotorcycleRider.licenseRestriction("A2");
            expect(result).to.equal("Motorcycles with maximum power of 35KW. and the minimum age is 18.");
        });

        it("should return correct information for category 'A'", function() {
            const result = MotorcycleRider.licenseRestriction("A");
            expect(result).to.equal("No motorcycle restrictions, and the minimum age is 24.");
        });

        it("should throw an error for invalid category", function() {
            expect(() => MotorcycleRider.licenseRestriction("invalid")).to.throw("Invalid Information!");
        });
    });

    describe("motorcycleShowroom", function() {
        it("should return correct message and available bikes length", function() {
            const engineVolume = ["125", "250", "600"];
            const maximumEngineVolume = 300;
            const result = MotorcycleRider.motorcycleShowroom(engineVolume, maximumEngineVolume);
            expect(result).to.equal("There are 2 available motorcycles matching your criteria!");
        });

        it("should throw an error for invalid parameters", function() {
            expect(() => MotorcycleRider.motorcycleShowroom("invalid", "invalid")).to.throw("Invalid Information!");
        });
    });

    describe("otherSpendings", function() {
        it("should return correct message without discount", function() {
            const equipment = ["helmet"];
            const consumables = ["engine oil"];
            const discount = false;
            const result = MotorcycleRider.otherSpendings(equipment, consumables, discount);
            expect(result).to.equal("You spend $270.00 for equipment and consumables!");
        });

        it("should return correct message with discount", function() {
            const equipment = ["helmet"];
            const consumables = ["engine oil"];
            const discount = true;
            const result = MotorcycleRider.otherSpendings(equipment, consumables, discount);
            expect(result).to.equal("You spend $243.00 for equipment and consumables with 10% discount!");
        });

        it("should throw an error for invalid parameters", function() {
            expect(() => MotorcycleRider.otherSpendings("invalid", "invalid", "invalid")).to.throw("Invalid Information!");
        });
    });
});