import { Multiply } from '../util';

describe('Test the functionality of the multiply function', () => {

    it('should return correct value after multiplying two numbers', () => {
        expect(Multiply(1,2)).toEqual(2);
    });

    it('should return 0 if one of the argument is zero', () => {
        expect(Multiply(0,2)).toEqual(0);
    })
 
})