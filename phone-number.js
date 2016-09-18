//
// This is only a SKELETON file for the "Phone Number" exercise. It's been provided as a
// convenience to get you started writing code faster.
// Make sure to look at test.script.js--that should give you some hints about what is
// expected here.

'use strict';

var Phone = module.exports = function Phone(number) {
    this.rawNumber = number;
    this.cleanedNumber = this.cleanNumber(number);
};

Phone.prototype.cleanNumber = function(number) {
    var num = number.replace(/\D/g, '');
    /* /\D Matches any non-digit character. Equivalent to [^0-9].

For example, /\D/ or /[^0-9]/ matches 'B' in "B2 is the suite number." Adam.Sakhr Comment to explain why i used it
for the flag regular expression should match the same string multiple times. Then the regular expression object needs to be created with the flag /g set (be it via a regular expression literal, be it via the constructor RegExp)
*/

    if (num.length === 10) {
        return num;
    } else if (num.length === 11 && num[0] === '1') {
        return num.substr(1, num.length);
    } else {
        return '0000000000';
    }
};

Phone.prototype.number = function() {
    return this.cleanedNumber;
};

Phone.prototype.areaCode = function() {
    return this.number().substr(0, 3);
};

Phone.prototype.exchangeCode = function() {
    return this.number().substr(3, 3);
};

Phone.prototype.subscriberNumber = function() {
    return this.number().substr(6, 4);
};

Phone.prototype.toString = function() {
    return '(' + this.areaCode() + ') ' + this.exchangeCode() + '-' + this.subscriberNumber();

};
