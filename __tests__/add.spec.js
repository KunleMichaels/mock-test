import { Add } from '../util';

describe('Test the functionality of the add function', () => {
    
    it('should return correct value after adding two numbers', () => {
        expect(Add(1,2)).toEqual(3);
    })
    
})