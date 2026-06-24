const validatePalindrome = require('./validatePalindrome');

describe('validatePalindrome Unit Tests', () => {
    
    test('should identify "racecar" as a valid palindrome', () => {
        expect(validatePalindrome('racecar')).toBe(true);
    });

    test('should identify "hello" as an invalid palindrome', () => {
        expect(validatePalindrome('hello')).toBe(false);
    });

    test('should ignore case, spaces, periods, and commas', () => {
        expect(validatePalindrome('Mad am.')).toBe(true);
    });
    
});