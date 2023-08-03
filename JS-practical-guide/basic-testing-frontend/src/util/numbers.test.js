import { describe, it, expect } from 'vitest';
import { cleanNumbers, transformToNumber } from './numbers';

describe('transformToNumber()', () => {
    it('should transform a string number to a number type', () => {
        const input = '1';

        const result = transformToNumber(input);

        expect(result).toBeTypeOf('number');
        expect(result).toBe(+input);
    });

    it('should yield NaN for non-transformable values', () => {
        const input = 'invalid';
        const input2 = {};

        const result = transformToNumber(input);
        const result2 = transformToNumber(input2);

        expect(result).toBeNaN();
        expect(result2).toBeNaN();
    });
});

describe('cleanNumbers()', () => {
    it('should return an array of numbers if an array of string number is provided', () => {
        const numberValues = ['1', '2'];

        const cleanedNumbers = cleanNumbers(numberValues);

        cleanedNumbers.forEach((number) => {
            expect(number).toBeTypeOf('number');
        });
        expect(cleanedNumbers).toEqual([1, 2]);
    });

    it('should throw an error if an array with at least one empy string is provided', () => {
        const numberValues = ['', 1];

        const clearFn = () => cleanNumbers(numberValues);

        expect(clearFn).toThrow();
    });
});