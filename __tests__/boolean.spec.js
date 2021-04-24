import { BooleanTest } from '../util';

describe('Test the functionality of the BooleanTest function', () => {

    it('should return true if input is greater than 0', () => {
        expect(BooleanTest(1)).toEqual(true);
        expect(BooleanTest(1)).toBeTruthy();
    })

    it('should return false if input is lesser than 0', () => {
        expect(BooleanTest(-1)).toEqual(false);
        expect(BooleanTest(-1)).toBeFalsy();
    })
})