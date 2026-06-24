/* jshint esversion: 6 */

function cleanData(inputWord) {
    // converts to lowercase and removes spaces, commas, periods
    return inputWord.toLowerCase().replace(/[\s,\.]/g, '');
}

function testPalindrome(cleanedWord) {
    // reverses string and compares it to the original cleaned string
    const reversedWord = cleanedWord.split('').reverse().join('');
    return cleanedWord === reversedWord;
}

function validatePalindrome(inputWord) {
    // calls cleanData and testPalindrome to return boolean
    const cleaned = cleanData(inputWord);
    return testPalindrome(cleaned);
}

module.exports = validatePalindrome;