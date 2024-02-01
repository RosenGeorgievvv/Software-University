import { assert } from 'chai';
import {sum} from '../4.)SumOfNumbers';

describe('SumOfNumbers', () =>{
    it('[1,2,3] returns 6', ()=>{
        assert.equal(sum([1,2,3]), 6)
    });

    it('[1,2,3] returns 6', () => { 
        assert.equal(sum([]), 0)
    });
});