import { getSum } from './getSum';

describe('getSum function', () => {
    it('should add two numbers correctly', () => {
        expect(getSum(2, 3)).toBe(5);
        expect(getSum(0, 0)).toBe(0);
        expect(getSum(-1, 1)).toBe(0);
    });
});
