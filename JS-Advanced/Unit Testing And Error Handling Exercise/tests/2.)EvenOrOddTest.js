const { assert } = require('chai');
const { isOddOrEven } = require('../2.)EvenOrOdd');

describe('EvenOrOdd Test Suit', () => {
    it('even is even string', () => {
        assert.equal(isOddOrEven('even'), 'even');
    });

    it('odd is odd string', () => {
        assert.equal(isOddOrEven('odd'), 'odd');
    });

    it('empty string is even string', () => {
        assert.equal(isOddOrEven(''), 'even');
    });

    it('no string is undefined', () => {
        assert.isUndefined(isOddOrEven());
    });

    it('1 is undefined', () => {
        assert.isUndefined(isOddOrEven(1));
    });
});