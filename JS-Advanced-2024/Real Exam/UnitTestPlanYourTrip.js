const { expect } = require('chai');
const planYourTrip = require('./planYourTrip');

describe('planYourTrip', () => {
    describe('choosingDestination', () => {
        it("return correct message for Ski Resort in Winter", () => {
            let result = planYourTrip.choosingDestination("Ski Resort", "Winter", 2024);
            expect(result).to.equal('Great choice! The Winter is the perfect time to visit the Ski Resort.')
        });

        it('return correct message for Ski Resort in non-Winter season', () => {
            let result = planYourTrip.choosingDestination('Ski Resort', 'Summer', 2024);
            expect(result).to.equal('Consider visiting during the Winter for the best experience at the Ski Resort.')
        });

        it('throw error for invalid year', () => {
            expect(() => planYourTrip.choosingDestination('Ski Resort', 'Winter', 2023)).to.throw('Invalid Year!');
        });

        it('throw error for invalid destination', () => {
            expect(() => planYourTrip.choosingDestination('Beach', 'Summer', 2024)).to.throw('This destination is not what you are looking for.')
        });
    });

    describe('exploreOptions', () => {
        it('remove activity at specified index', () => {
            let result = planYourTrip.exploreOptions(['Skiing', 'Snowboarding', 'Winter Hiking'], 1);
            expect(result).to.equal('Skiing, Winter Hiking');
        });

        it('throw error for invalid activities', () => {
            expect(() => planYourTrip.exploreOptions('not an array', 0)).to.throw('Ivalid Information!');
        });

        it('throw error for invalid index', () => {
            expect(() => planYourTrip.exploreOptions(['Skiing', 'Snowboarding'], 2)).to.throw('Invalid Information!');
        });
    });

    describe('estimateExpenses', () => {
        it('return message for total cost less than or equal to 500', () => {
            let result = planYourTrip.estimateExpenses(100, 4);
            expect(result).to.equal('The trip is budget-friendly, estimated cost is $400.00.')
        });

        it('return message for total cost greater than 500', () => {
            let result = planYourTrip.estimateExpenses(200, 4);
            expect(result).to.equal('The estimated cost for the trip is $800.00, plan accordingly.');
        });

        it('throw error  for invalid distance', () => {
            expect(() => planYourTrip.estimateExpenses('not a number', 4)).to.throw('Invalid Information!');
        });

        it('throw error for negative distance', () => {
            expect(() => planYourTrip.estimateExpenses(-100, 4)).to.throw('Invalid Information!');
        });

        it('throw error for invalid fuel cost', () =>{
            expect(() => planYourTrip.estimateExpenses(100, 'not a number')).to.throw('Invalid Information!');
        });

        it('throw error for negative fuel cost', () =>{
            expect(() => planYourTrip.estimateExpenses(100, -4)).to.throw('Invalid Information!');
        });

        it('throw error for zero fuel cost', () =>{
            expect(() => planYourTrip.estimateExpenses(100, 0)).to.throw('Invalid Information!')
        });
    });
});